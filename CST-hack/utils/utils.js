import axios from "axios";

export function getDataForDate(date, user_id, API_URL) {
    return (axios.get(
        `${API_URL}/get-data-for-date/${user_id}/${date}/`)
        .then((response) => {
            return response.data;
        })
        .catch((response) => {
            try {
                show({ message: response, type: "error" });
            } catch (e) {
                console.log("Response get data: ", response);
            }
        }));
}

export function getLeaderboard(company_id, API_URL) {
    return (axios.get(
        `${API_URL}/get-leaderboard/${company_id}/`)
        .then((response) => {
            return response.data;
        })
        .catch((response) => {
            try {
                show({ message: response, type: "error" });
            } catch (e) {
                console.log("Response get leaderboard: ", response);
            }
        }));
}

export function getBadges(user_id, API_URL) {
    return (axios.get(
        `${API_URL}/get-badges/${user_id}/`)
        .then((response) => {
            return response.data;
        })
        .catch((response) => {
            try {
                show({ message: response, type: "error" });
            } catch (e) {
                console.log("Response get badges: ", response);
            }
        }));
}

export function getProgressDaily(user_id, API_URL) {
    return (axios.get(
        `${API_URL}/get-progress/daily/${user_id}`)
        .then((response) => {
            return response.data;
        })
        .catch((response) => {
            try {
                show({ message: response, type: "error" });
            } catch (e) {
                console.log("Response get daily progress: ", response);
            }
        }));
}

export function getProgressMonthly(user_id, API_URL) {
    return (axios.get(
        `${API_URL}/get-progress/monthly/${user_id}`)
        .then((response) => {
            return response.data;
        })
        .catch((response) => {
            try {
                show({ message: response, type: "error" });
            } catch (e) {
                console.log("Response get monthly progress: ", response);
            }
        }));
}

// export function deleteComment(comment_id, API_URL) {
//     return (axios.delete(
//         `${API_URL}/delete-comment/${comment_id}`)
//         .then((response) => {
//             return response.data;
//         })
//         .catch((response) => {
//             try {
//                 show({ message: response, type: "error" });
//             } catch (e) {
//                 console.log("Response delete comment: ", response);
//             }
//         }));
// }

// export function uploadPost(formData, API_URL) {
//     return (axios.post(
//         `${API_URL}/add-post`,
//         formData,
//         {
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         })
//         .then((response) => {
//             return 1;
//         })
//         .catch((response) => {
//             try {
//                 show({ message: response, type: "error" });
//             } catch (e) {
//                 console.log("Response upload post: ", response);
//             }
//         }));
// }

// export function acceptFriendRequest(formData, API_URL) {
//     return (axios.put(
//         `${API_URL}/accept-friend-request`,
//         formData,
//         {
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         })
//         .then((response) => {
//             return response.data;
//         })
//         .catch((response) => {
//             try {
//                 show({ message: response, type: "error" });
//             } catch (e) {
//                 console.log("Response accept friend request: ", response);
//             }
//         }));
// }