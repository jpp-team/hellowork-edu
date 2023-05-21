export const checkRedeem = (voucher, user) => {
    return courseRedeem.some((item) => {
        return item.id_voucher === voucher && item.id_user === user;
    });
};
