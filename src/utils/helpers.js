const IgnoreUrl = (url) => {
    const ignore = [
        //app
        '/api/v1/lay-danh-sach-bai-viet-ks',
        '/api/v1/lay-noi-dung-bai-viet-ks'
    ];

    let check = false;
    ignore.forEach((item) => {
        if (url.indexOf(item) >= 0) check = true;
    });

    return check;
};

module.exports = {
    IgnoreUrl,
};
