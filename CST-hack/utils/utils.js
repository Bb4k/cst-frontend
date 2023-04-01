import axios from "axios";

export function getComments(user_id, API_URL) {
    return (axios.get(
        `${API_URL}/get-comments-for-post/${user_id}`)
        .then((response) => {
            return response.data;
        })
        .catch((response) => {
            try {
                show({ message: response, type: "error" });
            } catch (e) {
                console.log("Response get comments: ", response);
            }
        }));
}

export function deleteComment(comment_id, API_URL) {
    return (axios.delete(
        `${API_URL}/delete-comment/${comment_id}`)
        .then((response) => {
            return response.data;
        })
        .catch((response) => {
            try {
                show({ message: response, type: "error" });
            } catch (e) {
                console.log("Response delete comment: ", response);
            }
        }));
}

export function uploadPost(formData, API_URL) {
    return (axios.post(
        `${API_URL}/add-post`,
        formData,
        {
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response) => {
            return 1;
        })
        .catch((response) => {
            try {
                show({ message: response, type: "error" });
            } catch (e) {
                console.log("Response upload post: ", response);
            }
        }));
}

export function acceptFriendRequest(formData, API_URL) {
    return (axios.put(
        `${API_URL}/accept-friend-request`,
        formData,
        {
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response) => {
            return response.data;
        })
        .catch((response) => {
            try {
                show({ message: response, type: "error" });
            } catch (e) {
                console.log("Response accept friend request: ", response);
            }
        }));
}