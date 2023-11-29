interface user {
  name: String;
  email: String;
  phone: String;
  avatar: String;
  password: String;
}

export const User: user = {
  name: 'Nam vũ',
  email: 'vpnam2k1@gmail.com',
  phone: '0974046550',
  avatar: require('./assets/image/src/avatar.png'),
  password: '123456',
};

export const list = [
  {
    name: 'Tên hiển thị',
    value: User.name,
  },
  {
    name: 'Địa chỉ email',
    value: User.email,
  },

  {
    name: 'SĐT đăng ký',
    value: User.phone,
  },
];
