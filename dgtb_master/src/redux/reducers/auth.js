import {
    APP_SET_AUTH_STATE,
    APP_SAVE_LOGGED_USER,
    APP_REMOVE_LOGGED_USER,
    APP_SAVE_REFRESH_TOKEN,
} from "../actions/constants";

const init = {
    loggedIn: true,
    token: null,
    refreshToken: null,
    user: {
        accessToken:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlOGZlOGQxOWU2ZmY0MGMxOGZkNjIyMyIsImlhdCI6MTU4ODA2MDA5NCwiZXhwIjoxNTg4MDYwMzk0fQ.gHLkCbiUGJ7U6CVR8PczSRX_vaS866eWoC9Dvnc8ur0",
        name: "Vũ Hồng Ziệt",
        thumbnail:
            "http://27.72.147.104:3000/api/v1/uploads/get/image/avatar?imageName=avatar.jpg",
        _id: "5e8fe8d19e6ff40c18fd6223",
    },
};

export default (state = init, { type, payload }) => {
    switch (type) {
        case APP_SET_AUTH_STATE:
            return {
                ...state,
                loggedIn: payload || false,
            };
        case APP_SAVE_LOGGED_USER:
            return {
                ...state,
                user: payload.name,
                token: payload.accessToken,
                idUser: payload._id,
            };
        case APP_SAVE_REFRESH_TOKEN:
            return {
                ...state,
                token: { ...state.token, ...payload },
            };
        case APP_REMOVE_LOGGED_USER:
            return {
                ...state,
                ...init,
            };
        default:
            return state;
    }
};
