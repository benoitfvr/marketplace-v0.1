import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        productId: "DEB6E3D7-680D-44C4-BC4C-B36CFB124804",
        productName: "Eau de source CRISTALINE",
        productPicture: "https://www.carrefour.fr/media/1500x1500/Photosite/PGC/BOISSONS/3274080001005_PHOTOSITE_20210709_165044_0.jpg?placeholder=1",
        productPrice: 96
      },
      {
        productId: "1614F93D-ADAE-49CB-9B03-AC776FA99D99",
        productName: "Eau gazeuse minérale naturelle SALVETAT",
        productPicture: "https://www.carrefour.fr/media/1500x1500/Photosite/PGC/BOISSONS/3068320123271_PHOTOSITE_20210705_075350_0.jpg?placeholder=1",
        productPrice: 300
      },
      {
        productId: "212A14C7-E781-4F4E-88CE-6D4D2AAF44FB",
        productName: "Eau aromatisée fraise VOLVIC JUICY",
        productPicture: "https://www.carrefour.fr/media/1500x1500/Photosite/PGC/BOISSONS/3057640467233_PHOTOSITE_20210127_055652_0.jpg?placeholder=1",
        productPrice: 112
      },
      {
        productId: "38451B30-7D8C-4533-BB04-A2513AAB1C16",
        productName: "Eau de source CRISTALINE",
        productPicture: "https://www.carrefour.fr/media/1500x1500/Photosite/PGC/BOISSONS/3254380003756_PHOTOSITE_20210617_053443_0.jpg?placeholder=1",
        productPrice: 75
      },
      {
        productId: "C73B7E67-8FDD-4336-9FA3-AE154B3CC3DC",
        productName: "Eau de source CARREFOUR",
        productPicture: "https://www.carrefour.fr/media/1500x1500/Photosite/PGC/BOISSONS/3270190114123_PHOTOSITE_20201027_190515_0.jpg?placeholder=1",
        productPrice: 150
      },
      {
        productId: "416C3141-1D94-4BF7-93E1-932EF0D8EF72",
        productName: "Eau gazeuse PERRIER",
        productPicture: "https://www.carrefour.fr/media/1500x1500/Photosite/PGC/BOISSONS/7613035833289_PHOTOSITE_20210611_205626_0.jpg?placeholder=1",
        productPrice: 336
      },
      {
        productId: "DA2536DB-94B7-4521-85EB-69D95D3F147D",
        productName: "Boisson concentrée orange s/sucres ajoutés",
        productPicture: "https://www.carrefour.fr/media/1500x1500/Photosite/PGC/BOISSONS/3124480185266_PHOTOSITE_20210718_170135_0.jpg?placeholder=1",
        productPrice: 227
      },
      {
        productId: "2894056C-D783-46D6-ADF1-5FAAE9DCB503",
        productName: "Eau minérale naturelle VITTEL",
        productPicture: "https://www.carrefour.fr/media/1500x1500/Photosite/PGC/BOISSONS/7613036249935_PHOTOSITE_20210623_174424_0.jpg?placeholder=1",
        productPrice: 246
      },
      {
        productId: "CAC1C405-F9AE-4232-A3E2-8F0FE1FA36FF",
        productName: "Eau gazeuse SAN PELLEGRINO",
        productPicture: "https://www.carrefour.fr/media/1500x1500/Photosite/PGC/BOISSONS/8002270044892_PHOTOSITE_20200403_054854_0.jpg?placeholder=1",
        productPrice: 354
      },
      {
        productId: "B6CE3BD2-C2AF-400C-BDF3-6DF2BACD6E7C",
        productName: "Eau gazeuse minérale naturelle Fines Bulles PERRIER",
        productPicture: "https://www.carrefour.fr/media/1500x1500/Photosite/PGC/BOISSONS/7613035833302_PHOTOSITE_20210709_171402_0.jpg?placeholder=1",
        productPrice: 54
      }
    ],

    StoreCart: [],
  },
  getters: {
    products: (state) => state.products,
    StoreCart: (state) => state.StoreCart,
  },
  mutations: {
    ADD_Item(state, id) {
      state.StoreCart.push(id);
    },

    REMOVE_Item(state, index) {
      state.StoreCart.splice(index, 1);
    },
  },
  actions: {
    addItem(context, id) {
      context.commit("ADD_Item", id);
    },

    removeItem(context, index) {
      context.commit("REMOVE_Item", index);
    },
  },
  modules: {
  }
})
