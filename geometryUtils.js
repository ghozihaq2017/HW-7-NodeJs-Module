const kelilingPersegi = (sisi) => {
  return sisi * 4;
};

const kelilingPersegiPanjang = (panjang, lebar) => {
  return 2 * (panjang + lebar);
};

const luasPersegi = (sisi) => {
  return sisi * sisi;
};

const luasPersegiPanjang = (panjang, lebar) => {
  return panjang * lebar;
};

module.exports = { kelilingPersegi, kelilingPersegiPanjang, luasPersegi, luasPersegiPanjang };
