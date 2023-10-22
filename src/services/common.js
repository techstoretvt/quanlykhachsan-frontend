import jwt_decode from "jwt-decode";





let variables = {
    countPageEvaluate: 5
}

let formatNumber = (num) => {
    if (num >= 1000 && num < 1000000) {
        return (num / 1000).toFixed(1) + 'k';
    } else if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'm';
    } else {
        return num?.toString();
    }
}

let decode_token_exp = (token) => {
    try {
        let decoded = jwt_decode(token)
        if (decoded) {

            return decoded.exp
        }
    } catch (e) {
        return 0
    }
}

const renderAvatarUser = (item) => {
    if (!item) return {}
    if (item.avatarUpdate) {
        return {
            backgroundImage: `url(${item.avatarUpdate})`,
        }
    }
    if (item.typeAccount === 'web') {
        if (item.avatar) {
            return {
                backgroundImage: `url(${item.avatar})`,
            }
        }
        else {
            return {

            }
        }
    }

    if (item.typeAccount === 'google') {
        return {
            backgroundImage: `url(${item.avatarGoogle})`,
        }
    }
    if (item.typeAccount === 'facebook') {
        return {
            backgroundImage: `url(${item.avatarFacebook})`,
        }
    }

    if (item.typeAccount === 'github') {
        return {
            backgroundImage: `url(${item.avatarGithub})`,
        }
    }


}

const renderAvatarUser_url = (item) => {
    if (!item) return ''
    if (item.avatarUpdate) {
        return item.avatarUpdate
    }
    if (item.typeAccount === 'web') {
        if (item.avatar) {
            return item.avatar
        }
        else {
            return '/images/user/no-user-image.jpg'
        }
    }

    if (item.typeAccount === 'google') {
        return item.avatarGoogle
    }
    if (item.typeAccount === 'facebook') {
        return item.avatarFacebook
    }

    if (item.typeAccount === 'github') {
        return item.avatarGithub
    }


}


const decode_token = (token) => {
    try {
        let decoded = jwt_decode(token)
        if (decoded)
            return decoded
    } catch (e) {
        return 0
    }
}

function formatDate(dateTimeString) {
    const dateTime = new Date(dateTimeString);

    const day = String(dateTime.getDate()).padStart(2, '0');
    const month = String(dateTime.getMonth() + 1).padStart(2, '0');
    const year = String(dateTime.getFullYear());

    const hours = String(dateTime.getHours()).padStart(2, '0');
    const minutes = String(dateTime.getMinutes()).padStart(2, '0');

    // Định dạng lại ngày tháng và giờ
    const formattedDateTime = `${hours}:${minutes} ${day}/${month}/${year}`;

    return formattedDateTime;
}


export {
    variables,
    formatNumber,
    decode_token_exp,
    renderAvatarUser,
    renderAvatarUser_url,
    decode_token,
    formatDate
}