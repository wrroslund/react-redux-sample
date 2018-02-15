import _ from 'lodash';
export const REQUEST_MATTERS = "REQUEST_MATTERS";
export const RECEIVE_MATTERS = "RECEIVE_MATTERS";
export const REQUEST_MATTER = "REQUEST_MATTER";
export const RECEIVE_MATTER = "RECEIVE_MATTER";
export const INVALIDATE_MATTER = "INVALIDATE_MATTER";

export const requestMatters = () => ({ type: REQUEST_MATTERS });
export const receiveMatters = (json) => ({
    type: RECEIVE_MATTERS,
    matters: json,
    receivedAt: Date.now()
});

export const requestMatter = () => ({ type: REQUEST_MATTER });
export const receiveMatter = (json) => ({
    type: RECEIVE_MATTER,
    matter: json,
    receivedAt: Date.now()
});

export const invalidateMatter = () => ({ type: INVALIDATE_MATTER });

let delay = ms => {
    var promiseCancel, promise = new Promise((resolve, reject) => {
        let timeoutId = setTimeout(resolve, ms);
        promiseCancel = () => {
            clearTimeout(timeoutId); 
            reject(Error("Cancelled"));
        };
    });
    promise.cancel = () => { 
        promiseCancel();
    };
    return promise; 
};
let matters = [
    { id: 1, name: "Enron Demo" },
    { id: 2, name: "Responsiveness" },
    { id: 3, name: "Case 2018_IL_523" }
];


export const fetchMatters = () => (dispatch) => {
    dispatch(requestMatters());
    //build dummy data
    return delay(1000)
        .then(() => matters)
        .then(mats => dispatch(receiveMatters(mats)));
};

export const fetchMatter = (matterid) => (dispatch) => {
    dispatch(requestMatter(matterid));
    //build dummy data
    return delay(1000)
        .then(() => _.find(matters,(m)=>m.id==matterid))
        .then(mat => dispatch(receiveMatter(mat)));
};