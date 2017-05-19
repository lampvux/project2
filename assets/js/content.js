var AlextConfig = {
    apiDomain: '//nhaphangtrungquoc.vn/',
    codeDomain: '//nhaphangtrungquoc.vn/',
    ajax_data: {
        isAjax: 1
    },
    nhtqExchangeRate: 0,
    serviceCost1688: 0,
    serviceCostTaobao: 0,
    serviceCostTmall: 0,
    translateSession: '',

    translateData: [],

    isTaobao: {
        detail: {
            url: ['item.taobao.com', 'tw.taobao.com/item', 'world.taobao.com/item'],
            getPage: ['item.taobao.com', 'tw.taobao.com', 'world.taobao.com']
        },
        search: {
            url: ['http://s.taobao.com/search', 'http://tw.taobao.com/search/', 'http://world.taobao.com/search/']
        }
    },
    isTmall: {
        detail: {
            url: ['detail.tmall.com', 'taiwan.tmall.com/item', 'world.tmall.com/item'],
            getPage: ['detail.tmall.com', 'taiwan.tmall.com', 'world.tmall.com']
        },
        search: {
            url: ['http://list.tmall.com/search_product.htm']
        }
    },
    is1688: {
        detail: {
            url: ['detail.1688.com'],
            getPage: ['detail.1688.com']
        },
        search: {
            url: ['http://s.1688.com/selloffer/offer_search.htm',
                'http://s.1688.com/individual/individual_search.htm',
                'http://s.1688.com/selloffer/offer_search_2015.htm'
            ]
        },
        shop: function() {
            var siteName = AlextCore.siteName[1];
            var isShopPage = window.location.pathname;
            if (isShopPage == "/page/offerlist.htm" || siteName == '1688') {
                return window.location.href.split('?')[0];
            }
            return false;
        }
    },
    util: {
        showShop: {
            'item.taobao.com': '#J_ShopInfo',
            'detail.tmall.com': '.ald-inner',
            'detail.1688.com': '.supplierinfo-body'
        },
        showGuide: {
            'item.taobao.com': '',
            'detail.tmall.com': '',
            'detail.1688.com': '.widget-custom .delivery-detail'
        },
        showId: {
            'item.taobao.com': '',
            'detail.tmall.com': '',
            'detail.1688.com': '.widget-custom .delivery-detail'
        },
        favShop: {
            'item.taobao.com': '#J_ShopInfo',
            'detail.tmall.com': '.ald-inner',
            'detail.1688.com': '#site_content .m-body .others'
        },
        favItem: {
            'item.taobao.com': '#J_Social',
            'detail.tmall.com': '.tm-action.tm-clear',
            'detail.1688.com': '.unit-detail-fav'
        }
    },
    order: {
        // Cau hinh chen nut dat mua Viet Nam
        orderButton: {
            'item.taobao.com': {
                parent: '#J_juValid',
                buttonArea: '',
                remove: ['.tb-btn-buy', '.tb-btn-add']
            },
            'tw.taobao.com': {
                // Cha cap 1 cua nut dat mua TQ
                parent: '#J_box_buycart',
                //
                buttonArea: '.item-buy-btn',
                // Button dat mua hoac them vao gio hang TQ
                remove: ['.item-buy-btn']
            },
            'world.taobao.com': {
                // Cha cap 1 cua nut dat mua TQ
                parent: '#J_box_buycart',
                //
                buttonArea: '.item-buy-btn',
                // Button dat mua hoac them vao gio hang TQ
                remove: ['.item-buy-btn']
            },
            'detail.tmall.com': {
                parent: '.tb-action.tm-clear',
                buttonArea: '',
                remove: ['.tb-btn-buy', '.tb-btn-basket']
            },
            'taiwan.tmall.com': {
                parent: '.tb-action.tm-clear',
                buttonArea: '',
                remove: ['.tb-btn-buy', '.tb-btn-basket']
            },
            'world.tmall.com': {
                parent: '.tb-action.tm-clear',
                buttonArea: '',
                remove: ['.tb-btn-buy', '.tb-btn-basket']
            },
            'detail.1688.com': {
                parent: '.obj-order',
                buttonArea: '',
                remove: ['.do-purchase', '.do-cart', '.unit-detail-qrcode']
            }
        },
        // Cau hinh chen gia Viet Nam
        priceTag: {
            'item.taobao.com': {
                priceTag: {
                    idPromo: '#J_PromoPrice',
                    idOfficial: '#J_StrPrice',
                    promo: '#J_PromoPrice .tb-rmb-num',
                    official: '#J_StrPrice .tb-rmb-num',
                    del: 'del'
                },
                separators: ['-']
            },
            'tw.taobao.com': {
                priceTag: {
                    idPromo: '#J_PromoPrice',
                    idOfficial: '#J_priceStd',
                    promo: '#J_PromoPrice .tb-rmb-num',
                    official: '#J_priceStd .tb-rmb-num',
                    del: 'price-del'
                },
                separators: ['-']
            },
            'world.taobao.com': {
                priceTag: {
                    idPromo: '#J_PromoPrice',
                    idOfficial: '#J_priceStd',
                    promo: '#J_PromoPrice .tb-rmb-num',
                    official: '#J_priceStd .tb-rmb-num',
                    del: 'price-del'
                },
                separators: ['-']
            },
            'detail.tmall.com': {},
            'taiwan.tmall.com': {
                priceTag: {
                    idPromo: '',
                    idOfficial: '',
                    promo: '',
                    official: '',
                    del: ''
                },
                separators: ['-']
            },
            'world.tmall.com': {},
            // phức tạp, không cấu hình
            'detail.1688.com': {},

            //key search khong lien quan den domain, chi de de hinh dung
            'search.1688.com': {
                itemTag: '',
                priceTag: ''
            },
            'search.taobao.com': {
                itemTag: '.grid .item',
                priceTag: '.price.g_price.g_price-highlight strong'
            },
            'search.tmall.com': {
                itemTag: '.product',
                priceTag: '.productPrice em'
            }

        },

        // Cau hinh lay thong tin san pham dat mua co ban
        product: {
            'item.taobao.com': {
                priceTag: {
                    idPromo: '#J_PromoPrice',
                    idOfficial: '#J_StrPrice',
                    promo: '#J_PromoPrice .tb-rmb-num',
                    official: '#J_StrPrice .tb-rmb-num',
                    del: 'del'
                },
                itemId: function() {
                    if (typeof Hub !== 'undefined') {
                        if (typeof Hub.config !== 'undefined') {
                            if (typeof Hub.config.get("sku") !== 'undefined') {
                                if (typeof Hub.config.get("sku").valItemId !== 'undefined') {
                                    return Hub.config.get("sku").valItemId;
                                }
                            }
                        }
                    }
                    var arrayUrlParam = window.document.location.href.split("?")[1].split("&");
                    var patt = /^s*id=[0-9]*/;
                    for (var i in arrayUrlParam) {
                        if (patt.test(arrayUrlParam[i])) {
                            return arrayUrlParam[i].split('=')[1];
                        }
                    }
                    return '';
                },
                redirectLinkDetail: function() {
                    return window.document.location.href.split("?")[0] + '?id=' + AlextConfig.order.product['item.taobao.com'].itemId();
                },
                _cid: 0,
                categoryId: function() {
                    var patt = /priceCutUrl\s*:\s*("|')[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?[-a-zA-Z0-9@:%_\+.~#?&//=]*("|')/gi;
                    var pattRootCatId = /rootCatId=[0-9]*/;
                    var cat = '';
                    $$$('script').each(function() {
                        var text = $$$(this).html();
                        if (text.indexOf("g_config = ") !== -1) {
                            var config = text.substr(text.indexOf("g_config = ")).trim();
                            if (config) {
                                var elements = config.match(patt);
                                if (elements !== null) {
                                    var rootCatParam = elements[0].match(pattRootCatId);
                                    if (rootCatParam !== null) {
                                        if (typeof rootCatParam[0].split("=")[1] !== 'undefined') {
                                            cat = rootCatParam[0].split("=")[1];
                                            AlextConfig.order.product['item.taobao.com']._cid = cat;
                                            return true;
                                        }
                                    }
                                }
                            }
                        }
                    });
                    return AlextConfig.order.product['item.taobao.com']._cid;
                },
                quantityTag: '#J_IptAmount',
                titleTag: '#J_Title h3',
                shopNameTag: ['.tb-shop-info-wrap .tb-shop-name a'],
                shopIdTag: ['.tb-shop-info-wrap .tb-shop-name a'],
                shopAddressTag: ['#J_LogisticInfo .tb-location em'],
                imageTag: 'img#J_ImgBooth',
                globalDataConfig: function() {
                    if (typeof Hub !== 'undefined' && typeof Hub.config.get("sku").valItemInfo.skuMap !== 'undefined') {
                        return Hub.config.get("sku").valItemInfo.skuMap;
                    }
                    return null;
                },
                skuTag: {
                    element: '.J_TSaleProp li',
                    select: 'tb-selected',
                    data: 'data-value',
                    subElement: 'a',

                    elementEach: 'dl.J_Prop.tb-prop'
                },
                vipTag: ['#J_PromoPrice .tb-vip-notice']
            },
            'tw.taobao.com': {
                priceTag: {
                    idPromo: '#J_PromoPrice',
                    idOfficial: '#J_priceStd',
                    promo: '#J_PromoPrice .tb-rmb-num',
                    official: '#J_priceStd .tb-rmb-num',
                    del: 'price-del'
                },
                itemId: function() {
                    return window.document.location.href.split("?")[0].split("/")[4].split(".")[0];
                },
                redirectLinkDetail: function() {
                    return window.document.location.href.split("?")[0];
                },
                _cid: 0,
                categoryId: function() {
                    var patt = /priceCutUrl\s*:\s*("|')[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?[-a-zA-Z0-9@:%_\+.~#?&//=]*("|')/gi;
                    var pattRootCatId = /rootCatId=[0-9]*/;
                    var cat = '';
                    $$$('script').each(function() {
                        var text = $$$(this).html();
                        if (text.indexOf("g_config = KISSY.merge(g_config,") !== -1) {
                            var config = text.substr(text.indexOf("g_config = KISSY.merge(g_config,")).trim();
                            config = config.substr(0, config.indexOf("KISSY.use('item/p/detail/index', function(S, D){ new D(); });") - 1).trim();
                            config = config.substr(config.indexOf("g_config = KISSY.merge(g_config,") + 32);
                            config = config.substr(0, config.indexOf("});") + 1);

                            if (config) {
                                var elements = config.match(patt);
                                if (elements !== null) {
                                    var rootCatParam = elements[0].match(pattRootCatId);
                                    if (rootCatParam !== null) {
                                        if (typeof rootCatParam[0].split("=")[1] !== 'undefined') {
                                            cat = rootCatParam[0].split("=")[1];
                                            AlextConfig.order.product['tw.taobao.com']._cid = cat;
                                            return true;
                                        }
                                    }
                                }
                            }
                        }
                    });
                    return AlextConfig.order.product['tw.taobao.com']._cid;
                },
                quantityTag: '#J_IptAmount',
                titleTag: '#J_Title.item-title h3.tb-main-title',
                shopNameTag: ['#J_shop_detail .tb-shop-name a h3'],
                shopIdTag: ['#J_shop_detail .tb-shop-name a'],
                shopAddressTag: ['#J_WlAreaInfo #J-From'],
                imageTag: 'img#J_ThumbView',
                globalDataConfig: function() {
                    if (typeof Hub !== 'undefined' && typeof Hub.mods.sku !== 'undefined') {
                        return Hub.mods.sku.getConfig().valItemInfo.skuMap;
                    }
                    return null;
                },
                skuTag: {
                    element: '.J_SKU',
                    select: 'tb-selected',
                    data: 'data-pv',
                    subElement: 'a span',

                    elementEach: '#J_SKU dl'
                },
                vipTag: ['#J_PromoPrice .tb-vip-notice']
            },
            'world.taobao.com': {
                priceTag: {
                    idPromo: '#J_PromoPrice',
                    idOfficial: '#J_priceStd',
                    promo: '#J_PromoPrice .tb-rmb-num',
                    official: '#J_priceStd .tb-rmb-num',
                    del: 'price-del'
                },
                itemId: function() {
                    return window.document.location.href.split("?")[0].split("/")[4].split(".")[0];
                },
                redirectLinkDetail: function() {
                    return window.document.location.href.split("?")[0];
                },
                _cid: 0,
                categoryId: function() {
                    var patt = /priceCutUrl\s*:\s*("|')[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?[-a-zA-Z0-9@:%_\+.~#?&//=]*("|')/gi;
                    var pattRootCatId = /rootCatId=[0-9]*/;
                    var cat = '';
                    $$$('script').each(function() {
                        var text = $$$(this).html();
                        if (text.indexOf("g_config = KISSY.merge(g_config,") !== -1) {
                            var config = text.substr(text.indexOf("g_config = KISSY.merge(g_config,")).trim();
                            config = config.substr(0, config.indexOf("KISSY.use('item/p/detail/index', function(S, D){ new D(); });") - 1).trim();
                            config = config.substr(config.indexOf("g_config = KISSY.merge(g_config,") + 32);
                            config = config.substr(0, config.indexOf("});") + 1);

                            if (config) {
                                var elements = config.match(patt);
                                if (elements !== null) {
                                    var rootCatParam = elements[0].match(pattRootCatId);
                                    if (rootCatParam !== null) {
                                        if (typeof rootCatParam[0].split("=")[1] !== 'undefined') {
                                            cat = rootCatParam[0].split("=")[1];
                                            AlextConfig.order.product['world.taobao.com']._cid = cat;
                                            return true;
                                        }
                                    }
                                }
                            }
                        }
                    });
                    return AlextConfig.order.product['world.taobao.com']._cid;
                },
                quantityTag: '#J_IptAmount',
                titleTag: '#J_Title.item-title h3.tb-main-title',
                shopNameTag: ['.shop-info .tb-shop-name a'],
                shopIdTag: ['.shop-info .tb-shop-name a'],
                shopAddressTag: ['#J_WlAreaInfo #J-From'],
                imageTag: 'img#J_ThumbView',
                globalDataConfig: function() {
                    if (typeof Hub !== 'undefined' && typeof Hub.mods.sku !== 'undefined') {
                        return Hub.mods.sku.getConfig().valItemInfo.skuMap;
                    }
                    return null;
                },
                skuTag: {
                    element: '.J_SKU',
                    select: 'tb-selected',
                    data: 'data-pv',
                    subElement: 'a',

                    elementEach: '#J_SKU dl'
                },
                vipTag: ['#J_PromoPrice .tb-vip-notice']
            },
            'detail.tmall.com': {
                priceTag: {
                    idPromo: '#J_PromoPrice',
                    idOfficial: '#J_StrPriceModBox',
                    promo: '#J_PromoPrice .tm-price',
                    official: '#J_StrPriceModBox .tm-price',
                    del: ''
                },
                itemId: function() {
                    if (typeof TShop !== 'undefined') {
                        if (typeof TShop.cfg !== 'undefined') {
                            if (typeof TShop.cfg("valCartInfo") !== 'undefined') {
                                if (typeof TShop.cfg("valCartInfo").itemId !== 'undefined') {
                                    return TShop.cfg("valCartInfo").itemId;
                                }
                            }
                        }
                    }
                    var arrayUrlParam = window.document.location.href.split("?")[1].split("&");
                    var patt = /^s*id=[0-9]*/;
                    for (var i in arrayUrlParam) {
                        if (patt.test(arrayUrlParam[i])) {
                            return arrayUrlParam[i].split('=')[1];
                        }
                    }
                    return '';
                },
                redirectLinkDetail: function() {
                    return window.document.location.href.split("?")[0] + '?id=' + AlextConfig.order.product['detail.tmall.com'].itemId();
                },
                categoryId: function() {

                    if (typeof KISSY !== 'undefined') {
                        if (typeof KISSY.Config !== 'undefined') {
                            if (typeof KISSY.Config.categoryId !== 'undefined') {
                                return KISSY.Config.categoryId;
                            }
                        }
                    }

                    if (typeof TShop !== 'undefined') {
                        if (typeof TShop.cfg !== 'undefined') {
                            if (typeof TShop.cfg("itemDO") !== 'undefined') {
                                if (typeof TShop.cfg("itemDO").categoryId !== 'undefined') {
                                    return TShop.cfg("itemDO").categoryId;
                                }
                            }
                        }
                    }
                    return '';
                },
                quantityTag: '#J_Amount input',
                titleTag: '#J_DetailMeta .tb-detail-hd h1',
                shopNameTag: ['.slogo .slogo-shopname strong'],
                shopIdTag: ['.slogo .slogo-shopname'],
                shopAddressTag: [''],
                imageTag: 'img#J_ImgBooth',
                globalDataConfig: function() {
                    if (typeof TShop !== 'undefined') {
                        if (typeof TShop.cfg !== 'undefined') {
                            if (typeof TShop.cfg("valItemInfo") !== 'undefined') {
                                return TShop.cfg("valItemInfo");
                            }
                        }
                    }
                    return null;
                },
                skuTag: {
                    element: '.J_TSaleProp li',
                    select: 'tb-selected',
                    data: 'data-value',
                    subElement: 'a',

                    elementEach: 'dl.tb-prop.tm-sale-prop'
                },
                vipTag: ['.tm-promo-price .J_loginCheckProm']
            },
            'taiwan.tmall.com': {
                priceTag: {
                    idPromo: '#J_PromoPrice',
                    idOfficial: '#J_StrPriceModBox',
                    promo: '#J_PromoPrice .tm-price',
                    official: '#J_StrPriceModBox .tm-price',
                    del: ''
                },
                itemId: function() {
                    if (typeof TShop !== 'undefined') {
                        if (typeof TShop.cfg !== 'undefined') {
                            if (typeof TShop.cfg("valCartInfo") !== 'undefined') {
                                if (typeof TShop.cfg("valCartInfo").itemId !== 'undefined') {
                                    return TShop.cfg("valCartInfo").itemId;
                                }

                            }
                        }
                    }
                    return window.document.location.href.split("?")[0].split("/")[4].split(".")[0];
                },
                redirectLinkDetail: function() {
                    var sepArray = window.document.location.href.split("?");
                    if (sepArray.length > 1) {
                        var paramArray = sepArray[1].split("&");
                        var cateParam = '';
                        var patt = /^cat_id=[0-9]*/;
                        for (var i in paramArray) {
                            if (patt.test(paramArray[i])) {
                                cateParam = '?' + paramArray[i];
                                break;
                            }
                        }
                        return window.document.location.href.split("?")[0] + cateParam;
                    }
                    //return window.document.location.href;
                },
                categoryId: function() {
                    var res = '';
                    var patt = /cat_id=[0-9]*/;
                    var pattMatch = /^cat_id=[0-9]*/;
                    var stringCatParam = '';

                    $$$('head script').each(function() {
                        var jsLink = $$$(this).attr('src');
                        if (typeof jsLink !== 'undefined') {
                            if (patt.test(jsLink)) {
                                var params = jsLink.split("?")[1].split("&");
                                for (var i in params) {
                                    var m = params[i].match(pattMatch);
                                    if (m !== null) {
                                        stringCatParam = m[0];
                                        break;
                                    }
                                }
                            }
                        }
                    });
                    if (stringCatParam && stringCatParam !== '') {
                        res = stringCatParam.split('=')[1];
                        if (typeof res == 'undefined') {
                            res = '';
                        }
                    }
                    if (res !== '') {
                        return res;
                    }

                    var product = {};
                    $$$('script').each(function() {
                        var text = $$$(this).html();
                        if (text.indexOf('TShop.Setup') !== -1) {
                            var tsetup = text.substr(text.indexOf('TShop.Setup')).trim();
                            tsetup = tsetup.substr(0, tsetup.indexOf(');') + 2);
                            tsetup = tsetup.substr(tsetup.indexOf('{'));
                            tsetup = tsetup.substr(0, tsetup.lastIndexOf('}') + 1);

                            if (tsetup) {
                                tsetup = JSON.parse(tsetup.replace(/'/g, '"'));
                                product.config = tsetup;
                            }
                        }
                    });

                    if (typeof product.config !== 'undefined') {
                        if (typeof product.config.itemDO !== 'undefined') {
                            if (typeof product.config.itemDO.rootCatId !== 'undefined') {
                                return product.config.itemDO.rootCatId;
                            }
                        }
                    }
                    return '';
                },
                quantityTag: '#J_Amount input',
                titleTag: '#J_DetailMeta .tb-detail-hd h1',
                shopNameTag: ['#J_HdShopInfo .hd-shop-name a'],
                shopIdTag: ['#J_HdShopInfo .hd-shop-name a'],
                shopAddressTag: [''],
                imageTag: 'img#J_ImgBooth',
                globalDataConfig: function() {
                    if (typeof TShop !== 'undefined') {
                        if (typeof TShop.cfg !== 'undefined') {
                            if (typeof TShop.cfg("valItemInfo") !== 'undefined') {
                                return TShop.cfg("valItemInfo");
                            }
                        }
                    }
                    return null;
                },
                skuTag: {
                    element: '.J_TSaleProp li',
                    select: 'tb-selected',
                    data: 'data-value',
                    subElement: 'a span',

                    elementEach: '.tb-prop.tm-sale-prop'
                },
                vipTag: ['.tm-promo-price .J_loginCheckProm']
            },
            'world.tmall.com': {
                priceTag: {
                    idPromo: '#J_PromoPrice',
                    idOfficial: '#J_StrPriceModBox',
                    promo: '#J_PromoPrice .tm-price',
                    official: '#J_StrPriceModBox .tm-price',
                    del: ''
                },
                itemId: function() {
                    if (typeof TShop !== 'undefined') {
                        if (typeof TShop.cfg !== 'undefined') {
                            if (typeof TShop.cfg("valCartInfo") !== 'undefined') {
                                if (typeof TShop.cfg("valCartInfo").itemId !== 'undefined') {
                                    return TShop.cfg("valCartInfo").itemId;
                                }

                            }
                        }
                    }
                    return window.document.location.href.split("?")[0].split("/")[4].split(".")[0];
                },
                redirectLinkDetail: function() {
                    var sepArray = window.document.location.href.split("?");
                    if (sepArray.length > 1) {
                        var paramArray = sepArray[1].split("&");
                        var cateParam = '';
                        var patt = /^cat_id=[0-9]*/;
                        for (var i in paramArray) {
                            if (patt.test(paramArray[i])) {
                                cateParam = '?' + paramArray[i];
                                break;
                            }
                        }
                        return window.document.location.href.split("?")[0] + cateParam;
                    }
                    //return window.document.location.href;
                },
                categoryId: function() {
                    var res = '';
                    var patt = /cat_id=[0-9]*/;
                    var pattMatch = /^cat_id=[0-9]*/;
                    var stringCatParam = '';

                    $$$('head script').each(function() {
                        var jsLink = $$$(this).attr('src');
                        if (typeof jsLink !== 'undefined') {
                            if (patt.test(jsLink)) {
                                var params = jsLink.split("?")[1].split("&");
                                for (var i in params) {
                                    var m = params[i].match(pattMatch);
                                    if (m !== null) {
                                        stringCatParam = m[0];
                                        break;
                                    }
                                }
                            }
                        }
                    });
                    if (stringCatParam && stringCatParam !== '') {
                        res = stringCatParam.split('=')[1];
                        if (typeof res == 'undefined') {
                            res = '';
                        }
                    }
                    if (res !== '') {
                        return res;
                    }

                    var product = {};
                    $$$('script').each(function() {
                        var text = $$$(this).html();
                        if (text.indexOf('TShop.Setup') !== -1) {
                            var tsetup = text.substr(text.indexOf('TShop.Setup')).trim();
                            tsetup = tsetup.substr(0, tsetup.indexOf(');') + 2);
                            tsetup = tsetup.substr(tsetup.indexOf('{'));
                            tsetup = tsetup.substr(0, tsetup.lastIndexOf('}') + 1);

                            if (tsetup) {
                                tsetup = JSON.parse(tsetup.replace(/'/g, '"'));
                                product.config = tsetup;
                            }
                        }
                    });

                    if (typeof product.config !== 'undefined') {
                        if (typeof product.config.itemDO !== 'undefined') {
                            if (typeof product.config.itemDO.rootCatId !== 'undefined') {
                                return product.config.itemDO.rootCatId;
                            }
                        }
                    }
                    return '';
                },
                quantityTag: '#J_Amount input',
                titleTag: '#J_DetailMeta .tb-detail-hd h1',
                shopNameTag: ['#J_HdShopInfo .hd-shop-name a'],
                shopIdTag: ['#J_HdShopInfo .hd-shop-name a'],
                shopAddressTag: [''],
                imageTag: 'img#J_ImgBooth',
                globalDataConfig: function() {
                    if (typeof TShop !== 'undefined') {
                        if (typeof TShop.cfg !== 'undefined') {
                            if (typeof TShop.cfg("valItemInfo") !== 'undefined') {
                                return TShop.cfg("valItemInfo");
                            }
                        }
                    }
                    return null;
                },
                skuTag: {
                    element: '.J_TSaleProp li',
                    select: 'tb-selected',
                    data: 'data-value',
                    subElement: 'a',

                    elementEach: '.tb-prop.tm-sale-prop'
                },
                vipTag: ['.tm-promo-price .J_loginCheckProm']
            },
            'detail.1688.com': {
                priceTag: {
                    idPromo: '',
                    idOfficial: '',
                    promo: '',
                    official: '',
                    del: ''
                },
                itemId: function() {
                    if (typeof iDetailConfig !== 'undefined') {
                        return iDetailConfig.offerid;
                    }
                    return window.document.location.href.split("?")[0].split("/")[4].split(".")[0];
                },
                redirectLinkDetail: function() {
                    return window.document.location.href.split("?")[0];
                    //return window.document.location.href;
                },
                categoryId: function() {
                    if (typeof iDetailConfig !== 'undefined') {
                        if (typeof iDetailConfig.parentdcatid !== 'undefined') {
                            return iDetailConfig.parentdcatid;
                        }
                    }
                    return '';
                },
                quantityTag: '',
                titleTag: '#mod-detail-title h1.d-title',
                shopNameTag: ['.company td a', '.smt-info .nameArea a', '.company-name a.name'],
                shopIdTag: ['.company td a', '.smt-info .nameArea a', '.company-name a.name'],
                shopAddressTag: ['#mod-detail-bd .delivery-addr'],
                imageTag: '.content .vertical-img a img',

                globalDataConfig: function() {
                    if (typeof iDetailData !== 'undefined') {
                        return iDetailData;
                    }
                    return null;
                },
                skuTag: {
                    element: '',
                    select: '',
                    data: '',
                    subElement: '',

                    elementEach: ''
                },
                vipTag: [],
                skuTitleTranslateTag: [
                    { 'check': '#mod-detail .content .list  .thumb', 'each': '#mod-detail .content .leading.fd-clr .value.fd-clr .unit-detail-spec-operator' },
                    { 'check': '#mod-detail .table-sku td.name span', 'each': '#mod-detail .table-sku td.name span' },
                    { 'check': '#mod-detail-bd .obj-amount .d-title', 'each': '#mod-detail-bd .obj-amount .d-title' }
                ]
            }
        },
        category: []
    }
};

var init = {
    nhtqGetExchangeRate: function() {
        $$$.ajax({
            type: "GET",
            url: AlextAuth.exchangeRateUrl,
            xhrFields: { withCredentials: true },
            success: function(data) {
                if (data) {
                    AlextConfig.nhtqExchangeRate = parseFloat(data);
                }
            }
        });
    },
    nhtqGetConfig: function() {
        var data = {};
        if (AlextCore.nhtqIsDetailPage()) {
            var productDetail = AlextOrder.productDetail();
            if (productDetail.website == '1688') {
                data.website = AlextCore.getPage();
                data.cpid = AlextConfig.order.product[AlextCore.domain].categoryId();
                data.id = AlextConfig.order.product[AlextCore.domain].itemId();
                data.title = productDetail.title;
                data.img = productDetail.image;
                data.shop_id = productDetail.shop_id;
                data.min_price = 0;
                data.max_price = 0;
                if (typeof iDetailConfig !== 'undefined') {
                    if (typeof iDetailConfig.dcatid !== 'undefined') {
                        data.cid = iDetailConfig.dcatid;
                    }
                }
                if (typeof iDetailData !== 'undefined' && typeof iDetailData.sku !== 'undefined') {
                    if (iDetailData.sku.priceRange != undefined && iDetailData.sku.priceRange.length > 0) { // Price by range
                        for (var _i = 0; _i < iDetailData.sku.priceRange.length; _i++) {
                            if (data.max_price == 0) {
                                data.max_price = iDetailData.sku.priceRange[_i][1];
                            }
                            data.min_price = iDetailData.sku.priceRange[_i][1];
                        }
                    } else if (iDetailData.sku.skuMap != undefined) {
                        for (var _i in iDetailData.sku.skuMap) {
                            if (data.max_price == 0 || data.max_price < iDetailData.sku.skuMap[_i].price) {
                                data.max_price = iDetailData.sku.skuMap[_i].price;
                            }
                            if (data.min_price == 0 || data.min_price > iDetailData.sku.skuMap[_i].price) {
                                data.min_price = iDetailData.sku.skuMap[_i].price;
                            }
                        }
                    }
                }
            }
        }

        $$$.ajax({
            type: "POST",
            url: AlextAuth.configUrl,
            data: data,
            xhrFields: { withCredentials: true },
            success: function(data) {
                if (data) {
                    AlextConfig.nhtqExchangeRate = parseFloat(data.exchange_rate);
                    AlextConfig.serviceCost1688 = parseInt(data.service_cost_1688);
                    AlextConfig.serviceCostTaobao = parseInt(data.service_cost_taobao);
                    AlextConfig.serviceCostTmall = parseInt(data.service_cost_tmall);
                }
            }
        });
    },
    nhtqShowJivosite: function() {
        var widget_id = 'QnKUKaa5Yx';
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = '//code.jivosite.com/script/widget/' + widget_id;
        var ss = document.getElementsByTagName('script')[0];
        ss.parentNode.insertBefore(s, ss);
    },
    nhtqGetCategoryImport: function() {
        if (AlextCore.nhtqIsDetailPage()) {
            var website = AlextCore.getPage();
            var cid = AlextConfig.order.product[AlextCore.domain].categoryId();
            $$$.ajax({
                type: "GET",
                url: AlextAuth.categoryImportConfigUrl,
                data: { website: website, categoryId: cid },
                xhrFields: { withCredentials: true },
                success: function(data) {
                    if (data) {
                        AlextConfig.order.category = data;
                    }
                }
            });
        }
    }
};

var AlextAuth = {
    getInfoUrl: AlextConfig.apiDomain + 'customer/getInfo',
    loginUrl: AlextConfig.apiDomain + 'customer/login',
    loginFacebookUrl: AlextConfig.apiDomain + 'customer/loginFb.html',
    logoutUrl: AlextConfig.apiDomain + 'customer/logout',
    registerUrl: AlextConfig.apiDomain + 'customer/register',
    addFavouriteUrl: AlextConfig.apiDomain + 'favourite/add',
    translateUrl: AlextConfig.apiDomain + "dictionary/translate",
    orderUrl: AlextConfig.apiDomain + "shoppingCart/add",
    exchangeRateUrl: AlextConfig.apiDomain + "Config/GetExchangeRate/",
    configUrl: AlextConfig.apiDomain + "Config/getConfig",
    categoryImportConfigUrl: AlextConfig.apiDomain + "Config/GetCategoryImportConfig/",


    loginForm: '<div class="book-alitaobao in" id="alitaobaoLoginForm">\
					<div class="modal-backdrop"></div>\
					<div class="ali-dialog detail-cart-view" style="height: 240px">\
						<div class="dialog-header">\
							<h3>\u0110\u0102NG NH\u1eacP</h3>\
							<a rel="nofollow" target="_self" title="\u0110\u00f3ng" class="close-btn" href="javascript:void(0);">\
								\u0110\u00f3ng\
							</a>\
						</div>\
						<div class="dialog-content" style="height: 185px;">\
							<form action="#" method="POST" id="ali-login-form-content" style="height: 150px;">\
								<div class="ali-form-row">\
									<label for="lalitaobao-login-username">T\u00ean \u0111\u0103ng nh\u1eadp</label>\
									<input type="text" id="alitaobao-login-username" autofocus="" style="border:#ccc 1px solid;">\
								</div>\
								<div class="ali-form-row">\
									<label for="lalitaobao-login-pass">M\u1eadt kh\u1ea9u</label>\
									<input type="password" id="alitaobao-login-pass" autofocus="" style="border:#ccc 1px solid;">\
								</div>\
								<div id="alitaobao_message" class="ali-form-row" style="display:none">\
								</div>\
								<br><br><br>\
								<div>\
									<div id="brSpace" style="display:none"><br><br></div><br/>\
									<div>\
										<span>\
											<a id="alitaobao-login-btn" class="alitaobao-button alitaobao-button-important" style="height:28px;width:118px;line-height: 28px; margin-left: 131px;">\u0110\u0103ng nh\u1eadp</a>\
										</span>\
										\
									</div>\
									<br>\
									<div>\
										<span><a id="alitaobao-facebook-login-btn" class="frm-bar-btn-fb-si" href="' + AlextConfig.apiDomain + 'customer/loginFb.html' + '" target="_blank"></a></span>\
										<span>\n\
											<a id="alitaobao-google-login-btn" class="frm-bar-btn-g-si" href="https://accounts.google.com/o/oauth2/auth?scope=email&state=23853d74a9fb1dd6&redirect_uri=http://nhaphangtrungquoc.vn/customer/loginGG&response_type=code&client_id=961268222460-qbptof5n79sa152adhvbgj9l9mgj2dnd.apps.googleusercontent.com&access_type=offline" target="_blank">\
											</a>\
										</span>\
									</div>\
								</div>\
							</form>\
						</div>\
					</div>\
				</div>',

    /*
     * Hàm tạo form đăng nhập
     */
    loginFormView: function() {
        var divPopup = document.createElement('div');
        if (AlextCore.domain == "item.taobao.com") {
            divPopup.setAttribute('class', 'alitaobao-taobao-popup');
        }
        divPopup.innerHTML = AlextAuth.loginForm;
        document.body.appendChild(divPopup);

        $$$("#alitaobaoLoginForm .ali-dialog.detail-cart-view").show();

        $$$("#alitaobaoLoginForm .close-btn").click(function() {
            $$$("#alitaobaoLoginForm").remove();
            if (AlextCore.domain == "item.taobao.com") {
                $$$(".alitaobao-taobao-popup").remove();
            }
        });
    },
    /*
     * Hàm thực hiện đăng nhập với dữ liệu lấy từ form
     */
    loginAction: function() {
        $$$("#alitaobao-login-btn").click(function() {
            $$$(".ali-dialog.detail-cart-view").prepend('<div class="ali-loading"></div>'); // loading...
            var userName = $$$("#alitaobao-login-username").val();
            var passWord = $$$("#alitaobao-login-pass").val();
            if (userName != null && userName != '' && passWord != null && passWord != '') {
                var loginData = {
                    CustomerLoginForm: {
                        username: userName,
                        password: passWord
                    },
                    isAjax: 1
                };

                $$$.ajax({
                    url: AlextAuth.loginUrl,
                    data: loginData,
                    type: 'POST',
                    dataType: 'JSON',
                    xhrFields: { withCredentials: true },
                    success: function(data) {
                        if (data.code == 2) {
                            var message = '';
                            if (data.errors.username != null) {
                                message = data.errors.username[0];
                            }
                            if (data.errors.password != null) {
                                message = data.errors.password[0];
                            }
                            AlextAuth.showLoginMessageError(message); // Hien thi loi dang nhap
                            $$$(".ali-loading").remove();
                        }
                        AlextAuth.reloadToolBar(); // đăng nhập xong reload menu bar
                    },
                    error: function() {
                        AlextAuth.showLoginMessageError("H\u1ec7 th\u1ed1ng \u0111ang n\u00e2ng c\u1ea5p");
                        $$$(".ali-loading").remove();
                    }
                });
            } else {
                AlextAuth.showLoginMessageError("T\u00ean \u0111\u0103ng nh\u1eadp v\u00e0 m\u1eadt kh\u1ea9u kh\u00f4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng");
                $$$(".ali-loading").remove();
            }
        });
    },

    showLoginMessageError: function(message) {
        $$$("#brSpace").show();
        $$$("#alitaobao_message").html("<p style='color:red'>" + message + "</p>");
        $$$("#alitaobao_message").show();
    },
    /*
     * Đăng xuất
     */
    logoutAction: function() {
        $$$("#alitaobaoLogout").click(function() {
            $$$.ajax({
                url: AlextAuth.logoutUrl,
                data: AlextConfig.ajax_data,
                type: 'GET',
                xhrFields: { withCredentials: true },
                success: function() {
                    AlextAuth.reloadToolBar();
                }
            });
        });
    },

    /*
     * Thực hiện quá trình đăng nhập khi click vào menu đăng nhập
     */
    login: function() {
        $$$("#alitaobaoLogin").click(function() {
            AlextAuth.loginFormView(); // hiển thị form đăng nhập
            AlextAuth.loginAction(); // thực hiện đăng nhập với dữ liệu từ form
        });
    },

    /*
     * Lấy dữ liệu người dùng, thực hiện callback nhtqToolBar để tạo menu
     */
    getCustomerInfo: function() {
        $$$.ajax({
            type: "GET",
            url: AlextAuth.getInfoUrl,
            data: AlextConfig.ajax_data,
            xhrFields: { withCredentials: true },
            success: function(text) {
                AlextAuth.nhtqToolBar(text);
            },
            error: function() {
                AlextAuth.nhtqToolBar("");
            }
        });
    },

    /**
     * Autocompte fill dữ liệu cho search
     * @returns {undefined}
     */
    searchAutocomplete: function() {
        var ofset = $$$("#autocomplete-keywords").parent().parent().offset();
        var poss = $$$("#autocomplete-keywords").parent().parent().position();

        var inwi = $$$("#autocomplete-keywords").width();
        var inhe = $$$("#autocomplete-keywords").parent().parent().height();

        var mytop = poss.top + inhe + 3;

        var myleft = ofset.left;
        var mywidth = inwi + 5;

        $$$("#as_testinput_xml").css({ width: mywidth, top: mytop, left: myleft });
        var lastType = 0;
        $$$("#autocomplete-keywords").keyup(function(e) {
            var d = new Date();
            lastType = d.getTime();
            setTimeout(function() {
                var dd = new Date();
                var checkTime = dd.getTime();
                if (checkTime >= lastType + 500) {

                    if ($$$("#autocomplete-keywords").val() !== '' && e.keyCode !== 40) {
                        var isNum = /^\d+$/.test($$$("#autocomplete-keywords").val().trim());
                        if (!isNum) {
                            $$$.ajax({
                                url: AlextConfig.apiDomain + "AutoComplete",
                                data: { term: $$$("#autocomplete-keywords").val() },
                                type: 'GET',
                                xhrFields: { withCredentials: true },
                                dataType: "JSON",
                                success: function(data) {
                                    $$$("#as_ul").remove();
                                    var jsonData = data;

                                    if (jsonData.length > 0) {
                                        var ul = '<ul id="as_ul">';
                                        for (var i = 0; i < jsonData.length; i++) {

                                            var str = jsonData[i].keyword_label;
                                            var keywordshow = str.replace($$$("#autocomplete-keywords").val(), '<em>' +
                                                $$$("#autocomplete-keywords").val() + '</em>');
                                            var li = '<li class="list-item" tabindex="' + i + '" data-value="' + str + '">\n\
														<a href="javascript:void(0)" target="_self" name="1">\n\
															<span class="tl"> </span>\n\
															<span class="tr"> </span>\n\
															<span>' + keywordshow + '<br/><small class="word-cn">' + jsonData[i].keyword_cn + '</small></span>\n\
														</a>\n\
													</li>';
                                            ul += li;
                                        }
                                        ul = ul + '</ul>';

                                        $$$("#as_testinput_xml").append(ul);
                                        $$$("#as_testinput_xml").show();
                                    } else {
                                        var nodataSearch = '<ul id="as_ul" style="height:30px !important;">\
																<li class="list-item">\
																	<a>\
																		<span class="tl"> </span>\
																		<span class="tr"> </span>\
																		<span>Khong co du lieu</span>\
																	</a>\
																</li>\
															</ul>';
                                        $$$("#as_testinput_xml").append(nodataSearch);
                                        $$$("#as_testinput_xml").show();
                                    }

                                    // su kien chon tu tu danh muc autocomplete
                                    $$$("#as_ul li").select(function() {
                                        var inpt = $$$(this).attr("data-value");
                                        $$$("#autocomplete-keywords").val(inpt);
                                        var wcn = $$$(".word-cn", this).text();
                                        $$$("#keyword-cn").val(wcn);
                                        $$$("#autocomplete-keywords").focus();
                                        var websiteOption = $$$("#website-option").val();
                                        AlextAuth.insertLinkSearch(websiteOption, wcn);
                                        $$$("#as_ul").remove();
                                    });

                                    $$$("#as_ul li").click(function() {
                                        $$$(this).select();
                                    });

                                    $$$(".list-item").bind({
                                        keyup: function(e) {
                                            var key = e.keyCode;
                                            var target = $$$(e.currentTarget);

                                            switch (key) {
                                                case 38: // arrow up
                                                    target.prev().focus();
                                                    break;
                                                case 40: // arrow down
                                                    target.next().focus();
                                                    break;
                                                case 13: // enter
                                                    $$$(e.currentTarget).select();
                                                    break;
                                            }
                                        },

                                        focus: function(e) {
                                            $$$(".list-item").removeClass("as_highlight");
                                            $$$(e.currentTarget).addClass("as_highlight");
                                        }
                                    });
                                },
                                error: function(e) {

                                }
                            });
                        } else {
                            var websiteOption = $$$("#website-option").val();
                            AlextAuth.insertLinkSearch(websiteOption, $$$("#autocomplete-keywords").val());
                        }
                    } else if ($$$("#autocomplete-keywords").val() == '' && e.keyCode !== 40) {
                        $$$("#as_ul").remove();
                    }
                }
            }, 500);
        });
        $$$("#autocomplete-keywords").bind({
            keyup: function(e) {
                var key = e.keyCode;
                var target = $$$(e.currentTarget);

                switch (key) {
                    case 40: // arrow down
                        $$$("#as_ul li").first().focus();
                        break;
                }
            }
        });
    },

    /*
     * Tạo top menu bar với dữ liệu người dùng alitaobao
     */
    nhtqToolBar: function(customerInfo) {
        var autocomplete = '<div id="as_testinput_xml" class="autosuggest" style="display: none;"></div>';
        var searchBox =
            '<div class="search-nhtq fr curves3">\n\
				<form>\n\
				   <input class="main_search-nhtq curves3" type="text" id="autocomplete-keywords" name="keyword-label" placeholder="T\u00ecm ki\u1ebfm ch\u1ee7ng lo\u1ea1i, m\u00e3 s\u1ea3n ph\u1ea9m" size="30" autocomplete="off">\n\
				   <input type="hidden" id="keyword-cn" name="keyword">\n\
				   <span style="border-left:1px solid #999; float:left;">\n\
					   <select id="website-option" name="website" >\n\
						   <option value="taobao.com">taobao.com</option>\n\
						   <option value="1688.com">1688.com</option>\n\
						   <option value="tmall.com">tmall.com</option>\n\
					   </select>\n\
				   </span>\n\
				   <a href="javascript:void(0)" target="_self" id="alitaobao_btn_search" class="alitaobao-button alitaobao-button-important" style="height:20px; padding-bottom: 3px; padding-top: 7px;">T\u00ecm</a>\
				</form>' + '</div>';

        var includeExLink = '<script src="' + AlextConfig.codeDomain + 'js/extension/menu.js"></script>';

        var btnTranslate =
            '<div class="nhtq-bar-translate">\
						<a href="javascript:void(0)" target="_self" id="nhtqTranslateBtn" class="alitaobao-button ' + "" + '" style="height:20px; padding-bottom: 3px; padding-top: 7px; padding-left: 20px;padding-right: 20px;">\
							' + "nhtq" + '\
						</a>\
					</div>';

        var bar = document.createElement('div');
        bar.setAttribute('id', 'alitaobao');
        if (customerInfo.code == 1) {
            var walletBalanceFormat = AlextCore.numberFormat(customerInfo.customer.walletBalance) + " \u0111";
            bar.innerHTML =
                includeExLink +
                '<ul id="menu">\
					<li>\
						<a href="#">' + customerInfo.customer.username + '</a>\
						<ul>\
							<li><a href="' + AlextConfig.apiDomain + 'customer/changePassword.html" target="_blank">\u0110\u1ed5i m\u1eadt kh\u1ea9u</a></li>\
							<li><a href="' + AlextConfig.apiDomain + 'customer.html" target="_blank">T\u00e0i kho\u1ea3n c\u00e1 nh\u00e2n</a></li>\
							<li><a href="' + AlextConfig.apiDomain + 'customerOrder/indexTransaction.html" target="_blank">V\u00ed \u0111i\u1ec7n t\u1eed (' + walletBalanceFormat + ')</a></li>\
							<li><a id="alitaobaoLogout">\u0110\u0103ng xu\u1ea5t</a></li>\
						</ul>\
					</li>\
					<li>\
						<a href="#">Mua h\u00e0ng</a>\
						<ul>\
							<li><a href="' + AlextConfig.apiDomain + 'shoppingCart/" target="_blank">Gi\u1ecf h\u00e0ng</a></li>\
							<li><a href="' + AlextConfig.apiDomain + 'customerOrder.html" target="_blank">\u0110\u01a1n h\u00e0ng</a></li>\
							<li><a href="' + AlextConfig.apiDomain + 'favourite/viewShop.html" target="_blank">Shop y\u00eau th\u00edch</a></li>\
							<li><a href="' + AlextConfig.apiDomain + 'favourite/viewItem.html" target="_blank">SP y\u00eau th\u00edch</a></li>\
						</ul>\
					</li>\
					<li>\
						<a href="javascript:void(0);">H\u01b0\u1edbng d\u1eabn</a>\
						<ul>\
							<li><a href="' + AlextConfig.apiDomain + 'page/view?id=35" target="_blank">T\u00e0i kho\u1ea3n c\u00e1 nh\u00e2n</a></li>\
							<li><a href="' + AlextConfig.apiDomain + 'page/view?id=34" target="_blank">Mua h\u00e0ng v\u00e0 thanh to\u00e1n</a></li>\
							<li><a href="' + AlextConfig.apiDomain + 'page/view?id=39" target="_blank">Qu\u1ea3n l\u00fd v\u00ed \u0111i\u1ec7n t\u1eed</a></li>\
							<li><a href="' + AlextConfig.apiDomain + 'page/view?id=30" target="_blank">Giao nh\u1eadn h\u00e0ng h\u00f3a</a></li>\
						</ul>\
					</li>\
					<li><a href="javascript:void(0)" target="_blank">Blog</a></li>\
					<li><a href="' + AlextConfig.apiDomain + 'page/view?id=33" target="_blank">Li\u00ean h\u1ec7</a></li>\
					' + searchBox + btnTranslate + '\
				</ul>' + autocomplete;

            var body = document.body;
            body.insertBefore(bar, body.firstChild);
            $$$("#alitaobaoLoginForm").remove(); // Đăng nhập thành công tắt popup đăng nhập
            AlextAuth.logoutAction(); // Nạp hàm logout

        } else {
            bar.innerHTML =
                includeExLink +
                '<ul id="menu">\
					<li>\
						<a href="javascript:void(0);">T\u00e0i kho\u1ea3n</a>\
						<ul>\
							<li>\n\
								<a href="' + AlextConfig.apiDomain + 'customer/register" target="_blank" id="alitaobaoRegister">\u0110\u0103ng k\u00fd\</a>\n\
							</li>\
							<li>\n\
								<a id="alitaobaoLogin">\u0110\u0103ng nh\u1eadp</a>\n\
							</li>\
						</ul>\
					</li>\
					<li>\
						<a href="javascript:void(0);">Mua h\u00e0ng</a>\
						<ul>\
							<li><a href="' + AlextConfig.apiDomain + 'shoppingCart/" target="_blank">Gi\u1ecf h\u00e0ng</a></li>\
						</ul>\
					</li>\
					<li>\
						<a href="javascript:void(0);">H\u01b0\u1edbng d\u1eabn</a>\
						<ul>\
							<li><a href="' + AlextConfig.apiDomain + 'page/view?id=35" target="_blank">T\u00e0i kho\u1ea3n c\u00e1 nh\u00e2n</a></li>\
							<li><a href="' + AlextConfig.apiDomain + 'page/view?id=34" target="_blank">Mua h\u00e0ng v\u00e0 thanh to\u00e1n</a></li>\
							<li><a href="' + AlextConfig.apiDomain + 'page/view?id=39" target="_blank">Qu\u1ea3n l\u00fd v\u00ed \u0111i\u1ec7n t\u1eed</a></li>\
							<li><a href="' + AlextConfig.apiDomain + 'page/view?id=30" target="_blank">Giao nh\u1eadn h\u00e0ng h\u00f3a</a></li>\
						</ul>\
					</li>\
					<li><a href="javascript:void(0);" target="_blank">Blog</a></li>\
					<li><a href="' + AlextConfig.apiDomain + 'page/view?id=33" target="_blank">Li\u00ean h\u1ec7</a></li>\
					' + searchBox + btnTranslate + '\
				</ul>' + autocomplete;

            var body = document.body;
            body.insertBefore(bar, body.firstChild);
            AlextAuth.login(); //Nạp hàm login
        }

        AlextAuth.nhtqGetTranslateSession();
        AlextAuth.searchAutocomplete();

        $$$("#website-option").change(function() {
            AlextAuth.insertLinkSearch($$$("#website-option").val(), $$$("#keyword-cn").val());
        });

        $$$("#autocomplete-keywords").on('paste', function(event) {
            setTimeout(function() {
                var isNum = /^\d+$/.test($$$("#autocomplete-keywords").val().trim());
                if (isNum) {
                    AlextAuth.insertLinkSearch($$$("#website-option").val(), $$$("#autocomplete-keywords").val());
                }
            }, 100);
        });

        setTimeout(function() {
            $$$("body").css("position", "relative");
            $$$("body").css("top", "50px");
        }, 4000);
        $$$(window).load(function() {
            setTimeout(function() {
                $$$("#jivo_top_wrap").css("z-index", 111111111);
            }, 3000);
        });
    },

    /**
     * Hành động click nút dịch trên toolbar
     * @returns
     */
    barTranslateBtnClick: function(translateCookie) {

        if (translateCookie === "enabled") {
            setTimeout(function() {
                AlextAuth.barTranslateAction();
                AlextTranslate.pageMenuTranslate.getSiteNameConfig(AlextCore.domain);
            }, 200);
        }

        $$$("#nhtqTranslateBtn").click(function() {
            if (translateCookie !== "enabled") {
                AlextAuth.nhtqSetTranslateSession("enabled");
            } else {
                AlextAuth.nhtqSetTranslateSession("disabled");
            }
        });
    },

    /**
     * Style cho nút dịch trên toolbar
     * @param {type} translateCookie
     * @returns {undefined}
     */
    barTranslateBtnStyle: function(translateCookie) {
        var btnTranslateClass = "";
        var btnTranslateText = "";
        if (translateCookie === 'enabled') {
            btnTranslateText = "Ti\u1ebfng Trung";
        } else {
            btnTranslateText = "Ti\u1ebfng Vi\u1ec7t";
            btnTranslateClass = "alitaobao-button-important";
        }
        $$$("#nhtqTranslateBtn").addClass(btnTranslateClass);
        $$$("#nhtqTranslateBtn").text(btnTranslateText);
    },

    /**
     * Hàm thực hiện dịch khi có hành động click nút dịch trên toolbar
     * @returns {undefined}
     */
    barTranslateAction: function() {
        switch (AlextCore.nhtqIsDetailPage()) {
            case 'detail.1688.com':
                AlextTranslate._1688ShowTranslateSkuTitle(AlextConfig.translateData);
                break;
            case 'item.taobao.com':
                AlextTranslate._taobaoShowTranslateSkuTitle(AlextConfig.translateData);
                break;

            case 'detail.tmall.com':
                //_ALEXT._tmall_showTranslateAttributeList(_ALEXT_AUTH.translateData);
                //_ALEXT._tmall_VndPriceDetailPage();
                //_ALEXT._tmall_showTranslateSkuTitle(_ALEXT_AUTH.translateData);
                break;
        }
    },
    /*
     * Reload top bar sau khi thực hiện đăng nhập hoặc đăng xuất
     */
    reloadToolBar: function() {
        $$$("#alitaobao").remove();
        AlextAuth.getCustomerInfo();
    },

    /**
     * Tạo link tìm kiếm trên nút tìm kiếm toolbar
     * @param {type} website
     * @param {type} keyword
     * @returns {undefined}
     */
    insertLinkSearch: function(website, keyword) {
        var isNum = /^\d+$/.test($$$("#autocomplete-keywords").val().trim());
        if (!isNum) {
            if (keyword && website) {
                switch (website) {
                    case 'taobao.com':
                        var url = 'http://s.taobao.com/search?q=' + keyword;
                        break;

                    case 'tmall.com':
                        var url = 'http://list.tmall.com/search_product.htm?q=' + keyword;
                        break;

                    case '1688.com':
                        var url = 'http://s.1688.com/selloffer/offer_search.htm?keywords=' + keyword;
                        break;
                }
                $$$("#alitaobao_btn_search").attr("href", url);
                $$$("#alitaobao_btn_search").attr('target', '_blank');
            }
        } else {
            keyword = $$$("#autocomplete-keywords").val().trim();
            if (keyword && website) {
                switch (website) {
                    case 'taobao.com':
                        var url = 'http://item.taobao.com/item.htm?id=' + keyword;
                        break;

                    case 'tmall.com':
                        var url = 'http://detail.tmall.com/item.htm?id=' + keyword;
                        break;

                    case '1688.com':
                        var url = 'http://detail.1688.com/offer/' + keyword + '.html';
                        break;
                }
                $$$("#alitaobao_btn_search").attr("href", url);
                $$$("#alitaobao_btn_search").attr('target', '_blank');
            }
        }
    },
    /**
     * Lưu trạng thái dịch trên cookie của trình duyệt
     * @param {type} cname
     * @param {type} cvalue
     * @param {type} exdays
     * @returns {undefined}
     */
    nhtqSetCookie: function(cname, cvalue, exdays) {
        var domain = AlextCore.parentDomain.splice(1).join(".");
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + "; " + expires + ";domain=." + domain + ";path=/";
    },
    /**
     * Lấy dữ liệu trạng thái dịch lưu trên cookie của trình duyệt
     * @param {type} cname
     * @returns {String}
     */
    nhtqGetCookie: function(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1);
            if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
        }
        return "";
    },
    /**
     * Lấy dữ liệu session translate
     * @returns {String|data}
     */
    nhtqGetTranslateSession: function() {
        $$$.ajax({
            url: AlextConfig.apiDomain + "Config/GetTranslateSession",
            type: 'GET',
            xhrFields: { withCredentials: true },
            success: function(data) {
                AlextAuth.barTranslateBtnClick(data);
                AlextAuth.barTranslateBtnStyle(data);
                AlextConfig.translateSession = data;
            }
        });
    },
    /**
     * Tạo session translate
     * @param {type} data
     * @returns {undefined}
     */
    nhtqSetTranslateSession: function(data) {
        $$$.ajax({
            url: AlextConfig.apiDomain + "Config/SetTranslateSession",
            data: { data: data },
            type: 'GET',
            xhrFields: { withCredentials: true },
            success: function() {
                window.location.reload(true);
            }
        });
    }
};

var AlextCore = {
    domain: window.document.location.host,
    urlDetail: window.document.location.href,
    siteName: window.document.location.host.split("."),
    parentDomain: window.document.location.host.split("."),

    numberFormat: function(input) {
        if (input) {
            return input.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        }
        return 0;
    },
    nhtqIsDetailPage: function() {

        var href = window.document.location.href.split('?')[0].split('/');
        var tw = (href[2] + '/' + href[3]);

        if (AlextConfig.is1688.detail.url.indexOf(window.document.location.host) > -1 || AlextConfig.is1688.detail.url.indexOf(tw) > -1) {
            return 'detail.1688.com';
        }
        if (AlextConfig.isTaobao.detail.url.indexOf(window.document.location.host) > -1 || AlextConfig.isTaobao.detail.url.indexOf(tw) > -1) {
            return 'item.taobao.com';
        }
        if (AlextConfig.isTmall.detail.url.indexOf(window.document.location.host) > -1 || AlextConfig.isTmall.detail.url.indexOf(tw) > -1) {
            return 'detail.tmall.com';
        }
        return false;
    },
    nhtqIsSearchPage: function() {
        var href = window.document.location.href.split('?')[0];

        if (AlextConfig.is1688.search.url.indexOf(href) > -1) {
            return { func: 'search.1688.com', type: '' };
        }
        if (AlextConfig.isTaobao.search.url.indexOf(href) > -1) {
            return { func: 'search.taobao.com', type: 'search' };
        }
        if (AlextConfig.isTmall.search.url.indexOf(href) > -1) {
            return { func: 'search.tmall.com', type: '' };
        }
        var patt = /http:\/\/list.taobao.com\/itemlist\//;
        if (patt.test(href)) {
            return { func: 'search.taobao.com', type: 'list' };
        }
        return false;
    },
    detectedGoogleTranslate: function() {
        return false;
        // if($$$("#goog-gt-tt").length > 0) {
        // 	return true;
        // }
        // return false;
    },
    stringReplaceAll: function(strTarget, strSubString, strText) {
        if (strText != null && strText != "") {
            var intIndexOfMatch = strText.indexOf(strTarget);
            while (intIndexOfMatch != -1) {
                strText = strText.replace(strTarget, strSubString);
                intIndexOfMatch = strText.indexOf(strTarget);
            }
            return (strText);
        } else {
            return ("");
        }
    },
    getPage: function() {
        if (AlextConfig.is1688.detail.getPage.indexOf(AlextCore.domain) > -1) {
            return '1688';
        }
        if (AlextConfig.isTaobao.detail.getPage.indexOf(AlextCore.domain) > -1) {
            return 'taobao';
        }
        if (AlextConfig.isTmall.detail.getPage.indexOf(AlextCore.domain) > -1) {
            return 'tmall';
        }
        return false;
    },

    getDomainName: function() {
        if (AlextCore.domain.indexOf("1688.com") !== -1) {
            return "1688.com";
        } else if (AlextCore.domain.indexOf("taobao.com") !== -1) {
            return "taobao.com";
        } else if (AlextCore.domain.indexOf("tmall.com") !== -1) {
            return "tmall.com";
        }
        return null;
    },

    priceFormat: function(value) {
        return value.toFixed(0).replace(/./g, function(c, i, a) {
            return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "." + c : c;
        });
    },
    /**
     * Hàm trả về giá đã được format
     */
    nhtqPriceValue: function(textPriceCn) {
        var priceVN = AlextCore.nhtqPriceValueNoneFormat(textPriceCn);
        if (priceVN > 0) {
            priceVN = AlextCore.priceFormat(priceVN);
        }

        return priceVN;
    },
    /**
     * Hàm trả về giá trị float của giá việt nam chưa format
     * @param {type} textPriceCn
     * @returns {_ALEXT.nhtqPriceValueNoneFormat.PriceCn}
     */
    nhtqPriceValueNoneFormat: function(textPriceCn) {
        if (textPriceCn && textPriceCn !== '') {
            // var exExchange = 0.1;
            // if(AlextCore.getPage() === '1688' || AlextCore.nhtqIsSearchPage().func == 'search.1688.com') {
            // 	exExchange = 0.1;
            // }
            var exExchange = 0;
            switch (AlextCore.getDomainName()) {
                case "1688.com":
                    exExchange = AlextConfig.serviceCost1688;
                    break;
                case "taobao.com":
                    exExchange = AlextConfig.serviceCostTaobao;
                    break;
                case "tmall.com":
                    exExchange = AlextConfig.serviceCostTmall;
                    break;
            }
            exExchange = exExchange * 0.01;

            var PriceCn = parseFloat(textPriceCn);
            var priceVN = (PriceCn + PriceCn * exExchange) * AlextConfig.nhtqExchangeRate;
            priceVN = Math.round(priceVN);
            if ((priceVN % 100)) {
                if (priceVN < 100) {
                    priceVN = 100;
                } else {
                    priceVN = priceVN + (100 - priceVN % 100);
                }
            }
        }

        return priceVN;
    },
    nhtqSepPrice: function(text) {
        var seps = AlextConfig.order.priceTag[AlextCore.domain].separators;
        var cnTextArray = [];
        if (seps && seps.length > 0) {
            var splitRegexString = '[';
            for (var se = 0; se < seps.length; se++) {
                splitRegexString += '\\' + seps[se];
            }
            splitRegexString += ']';

            var splitRegex = new RegExp(splitRegexString);
            if (text != '') cnTextArray = text.split(splitRegex);
        } else { cnTextArray.push(text); }
        return cnTextArray;
    },
    nhtqDisableBtnClick: function(btnId) {
        document.getElementById(btnId).style.pointerEvents = 'none';
    },
    nhtqEnableBtnClick: function(btnId) {
        document.getElementById(btnId).style.pointerEvents = 'auto';
    },
    nhtqValidateSkuSelect: function() {
        if (AlextConfig.order.product[window.location.host].skuTag.elementEach != '') {
            var numSkuTag = $$$(AlextConfig.order.product[window.location.host].skuTag.elementEach).length;
            if (numSkuTag > 0) {
                var el = AlextConfig.order.product[window.location.host].skuTag.element;
                var se = AlextConfig.order.product[window.location.host].skuTag.select;
                var numSelect = $$$(el + '.' + se).length;
                if (numSelect == numSkuTag) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return true;
            }
        }
        return true;
    },
    nhtqDebug: function() {

    }
};

var AlextOrder = {

    isAllowedCategory: function() {
        return true;
        var categories = AlextConfig.order.category;
        if (categories.length > 0) {
            return true;
        }
        return false;
    },

    nhtqGetShopLink: function() {
        var productConfig = AlextConfig.order.product[AlextCore.domain];
        var shopLink = '';
        for (var i = 0; i < productConfig.shopIdTag.length; i++) {
            var sl = $$$(productConfig.shopIdTag[i]).attr('href');
            if (sl && sl != null && sl != '' && typeof sl != 'undefined') {
                shopLink = sl;
                if (shopLink.indexOf("http") == -1) {
                    shopLink = 'http:' + shopLink;
                }
                break;
            }
        }

        return shopLink;
    },

    nhtqGetShopId: function() {
        var shopLink = AlextOrder.nhtqGetShopLink();
        var shopId = '';
        if (shopLink != '') {
            shopId = new URL(shopLink).hostname.split(".")[0];
        }
        return shopId;
    },

    nhtqGetShopName: function() {
        var shopName = '';
        var productConfig = AlextConfig.order.product[AlextCore.domain];
        for (var i = 0; i < productConfig.shopNameTag.length; i++) {
            var sn = $$$(productConfig.shopNameTag[i]).text();
            if (sn && sn != null && typeof sn != 'undefined') {
                sn = sn.trim();
                if (sn != '') {
                    shopName = sn;
                    break;
                }
            }
        }
        return shopName;
    },

    nhtqGetShopAddress: function() {
        var shopAddress = '';
        var productConfig = AlextConfig.order.product[AlextCore.domain];
        for (var i = 0; i < productConfig.shopAddressTag.length; i++) {
            var sa = $$$(productConfig.shopAddressTag[i]).text();
            if (sa && sa != null && typeof sa != 'undefined') {
                sa = sa.trim();
                if (sa != '') {
                    shopAddress = sa.substring(0, 2);
                    break;
                }
            }
        }
        return shopAddress;
    },



    productDetail: function() {
        var productConfig = AlextConfig.order.product[AlextCore.domain];

        var title = $$$(productConfig.titleTag).text().trim();
        var shopName = AlextOrder.nhtqGetShopName();
        var shopId = AlextOrder.nhtqGetShopId();
        var shopAddress = AlextOrder.nhtqGetShopAddress();

        var image = $$$(productConfig.imageTag).attr('src');

        return {
            website: AlextCore.getPage(),
            id: '',
            title: title,
            url: AlextCore.urlDetail,
            image: image,
            ws_rule_number: '',
            min_quantity: '',
            price_ranges: '',
            weight: '',
            shop_id: shopId,
            shop_name: shopName,
            shop_address: shopAddress,
            list_sku: []
        };
    },
    orderDetail: function() {
        return {
            price: 0,
            quantity: 0,
            name: ''
        };
    },
    nhtqDoOrder: function(details) {
        var isImport = AlextOrder.isAllowedCategory();

        var require = ['id', 'website', 'url', 'title', 'shop_id', 'shop_name', 'image', 'list_sku'];
        var validate = true;
        for (var f = 0; f < require.length; f++) {
            var field = require[f];
            if (!details.hasOwnProperty(field)) {
                validate = false;
            }
        }

        if (validate == true && isImport == true && AlextCore.detectedGoogleTranslate() == false) {
            var checkOrder = true;
            var listSkus = details['list_sku'];
            var message = '';
            var totalQuan = 0;
            for (var li = 0; li < listSkus.length; li++) {
                var listSku = listSkus[li];
                if (listSku.hasOwnProperty('quantity') && listSku['quantity'] !== '') {
                    totalQuan += parseInt(listSku['quantity']);
                }

                if (!listSku.hasOwnProperty('price') || listSku['price'] == '' || !listSku.hasOwnProperty('name') || listSku['name'] == '' || !listSku.hasOwnProperty('quantity') || listSku['quantity'] == '') {

                    checkOrder = false;
                }
                if (!listSku.hasOwnProperty('name') || listSku['name'] == '') {
                    message = 'Ch\u01b0a ch\u1ecdn thu\u1ed9c t\u00ednh s\u1ea3n ph\u1ea9m';
                }
            }

            if (details.hasOwnProperty('min_quantity') && details.min_quantity != '') {
                var minQuan = parseInt(details.min_quantity);
                if (totalQuan < minQuan) {
                    checkOrder = false;
                    message = 'Ph\u1ea3i \u0111\u1eb7t t\u1ed1i thi\u1ec3u ' +
                        minQuan + ' s\u1ea3n ph\u1ea9m v\u1edbi m\u1eb7t h\u00e0ng n\u00e0y';
                }
            }

            if (checkOrder == true) {
                $$$.ajax({
                    url: AlextAuth.orderUrl,
                    data: details,
                    type: 'POST',
                    dataType: 'JSON',
                    xhrFields: { withCredentials: true },
                    success: function(data) {
                        AlextOrder.nhtqShowPopup(data, '');
                    },
                    error: function() {
                        alert("H\u1ec7 th\u1ed1ng \u0111ang n\u00e2ng c\u1ea5p");
                    }
                });
            } else {
                var outputMessage = message;
                if (message == '') {
                    outputMessage = 'Th\u00f4ng tin \u0111\u1eb7t mua kh\u00f4ng \u0111\u1ea7y \u0111\u1ee7';
                }
                AlextOrder.nhtqShowPopup({ code: 2, message: outputMessage }, '');
            }

        } else if (isImport == false) {
            AlextOrder.nhtqShowPopup({ code: 3 }, 'S\u1ea3n ph\u1ea9m n\u00e0y kh\u00f4ng n\u1eb1m trong danh m\u1ee5c \u0111\u1eb7t h\u00e0ng c\u1ee7a ch\u00fang t\u00f4i. \
					B\u1ea1n vui l\u00f2ng li\u00ean h\u1ec7 v\u1edbi b\u1ed9 ph\u1eadn CSKH \u0111\u1ec3 \u0111\u01b0\u1ee3c gi\u1ea3i \u0111\u00e1p!');
        } else if (AlextCore.detectedGoogleTranslate() == true) {
            AlextOrder.nhtqShowPopup({ code: 3 }, 'Failed to order! Please do not use GoogleTranslate when ordering');
        } else {
            AlextOrder.nhtqShowPopup({ code: 3 }, 'Th\u00f4ng tin \u0111\u1eb7t mua kh\u00f4ng \u0111\u1ea7y \u0111\u1ee7');
        }
        AlextCore.nhtqEnableBtnClick('alitaobao_order');
    },

    /*
     * Hiển thị popup thông báo
     * @returns {undefined}
     */
    nhtqShowPopup: function(data, message) {
        var type = data.code;
        var popupContent = {};
        popupContent.note = "Qu\u00fd kh\u00e1ch n\u00ean \u0111\u1eb7t " +
            "mua nhi\u1ec1u s\u1ea3n ph\u1ea9m c\u00f9ng m\u1ed9t shop, " +
            "trong c\u00f9ng m\u1ed9t \u0111\u01a1n " +
            "h\u00e0ng \u0111\u1ec3 \u0111\u01b0\u1ee3c " +
            "ph\u00ed v\u1eadn chuy\u1ec3n r\u1ebb h\u01a1n";
        var popupTitle = '';
        var moreLink = 'javascript:void(0);';
        var moreTarget = '_self';
        if (AlextCore.nhtqIsDetailPage() == 'detail.1688.com' || AlextCore.nhtqIsDetailPage() == 'item.taobao.com' || AlextCore.nhtqIsDetailPage() == 'detail.tmall.com') {

            var shopLink = AlextOrder.nhtqGetShopLink();
            if (shopLink != null && shopLink != '') {
                switch (AlextCore.nhtqIsDetailPage()) {
                    case 'detail.1688.com':
                        moreLink = 'http://' + new URL(shopLink).hostname.split(".")[0] + '.1688.com/page/offerlist.htm';
                        break;
                    case 'item.taobao.com':
                        moreLink = 'http://' + new URL(shopLink).hostname.split(".")[0] + '.taobao.com/search.htm';
                        break;
                    case 'detail.tmall.com':
                        moreLink = 'http://' + new URL(shopLink).hostname.split(".")[0] + '.tmall.com/search.htm';;
                        break;
                }

            }
            moreTarget = '_blank';
        }
        if (type == 1) {
            popupTitle = "Ch\u1ecdn mua th\u00e0nh c\u00f4ng";
            popupContent.message = "S\u1ea3n ph\u1ea9m qu\u00fd kh\u00e1ch " +
                "ch\u1ecdn mua \u0111\u00e3 \u0111\u01b0\u1ee3c " +
                "th\u00eam v\u00e0o gi\u1ecf h\u00e0ng th\u00e0nh c\u00f4ng.";
            popupContent.buttonText_cart = "Gi\u1ecf h\u00e0ng";
            popupContent.buttonText_more = "Mua ti\u1ebfp s\u1ea3n ph\u1ea9m n\u00e0y";
            popupContent.buttonText_moreShop = "S\u1ea3n ph\u1ea9m c\u00f9ng shop";

            popupContent.button = '<a href="' + AlextConfig.apiDomain + 'shoppingCart" title="' + popupContent.buttonText_cart + '" target="_blank" class="close-btn alitaobao-button alitaobao-button-important">' +
                popupContent.buttonText_cart +
                '</a>' + ' ' +
                '<a href="javascript:void(0);" title="' + popupContent.buttonText_more + '" class="close-btn alitaobao-button alitaobao-button-important-red" style="margin-right: 5px;">' +
                popupContent.buttonText_more +
                '</a>' +
                '<a href="' + moreLink + '" target="' + moreTarget + '" title="' + popupContent.buttonText_more + '" class="close-btn alitaobao-button alitaobao-button-important-green">' +
                popupContent.buttonText_moreShop +
                '</a>';


        } else if (type == 2) {
            popupTitle = "<p style='color:red'>Ch\u1ecdn mua kh\u00f4ng th\u00e0nh c\u00f4ng</p>";
            popupContent.message = "<p style='color:red'>" + data.message + "</p>";
            popupContent.buttonText = "\u0110\u00f3ng";


            popupContent.button = '<a href="javascript:void(0);" title="' + popupContent.buttonText_more + '" class="close-btn alitaobao-button">' +
                popupContent.buttonText +
                '</a>';

        } else {
            popupTitle = "<p style='color:red'>Ch\u1ecdn mua kh\u00f4ng th\u00e0nh c\u00f4ng</p>";
            popupContent.message = "<p style='color:red'>" + message + "</p>";
            popupContent.buttonText = "\u0110\u00f3ng";

            popupContent.button = '<a href="javascript:void(0);" title="' + popupContent.buttonText_more + '" class="close-btn alitaobao-button">' +
                popupContent.buttonText +
                '</a>';
        };

        var alitaobaoPopup = '<div class="book-alitaobao in" id="alitaobaoPopup">\
								<div class="modal-backdrop"></div>\
								<div class="ali-dialog detail-cart-view">\
									<div class="dialog-header">\
										<h3>' + popupTitle + '</h3>\
										<a rel="nofollow" target="_self" title="\u0110\u00f3ng" class="close-btn" href="javascript:void(0);">\
											\u0110\u00f3ng\
										</a>\
									</div>\
									<div class="dialog-content">\
										<div style="margin-bottom:10px;">' + popupContent.message + '</div>\
										<div class="dialog-buttons">' + popupContent.button +
            '</div>\
										<div style="margin-top:10px;">\
											* <b>L\u01b0u \u00fd: </b>' + popupContent.note +
            '</div>\
									</div>\
								</div>\
							</div>';

        var divPopup = document.createElement('div');
        if (AlextCore.nhtqIsDetailPage() == "item.taobao.com") {
            divPopup.setAttribute('class', 'alitaobao-taobao-popup');
        }

        divPopup.innerHTML = alitaobaoPopup;
        var body = document.body;
        document.body.appendChild(divPopup);

        $$$("#alitaobaoPopup .ali-dialog.detail-cart-view").show();
        $$$("#alitaobaoPopup .close-btn").click(function() {
            $$$("#alitaobaoPopup").remove();
        });
    },

    createButtonOrder: function(remove) {
        var page = AlextCore.getPage();
        var parentt = AlextConfig.order.orderButton[AlextCore.domain]['parent'];
        setTimeout(function() {
            if (remove === true) {
                var rms = AlextConfig.order.orderButton[AlextCore.domain]['remove'];
                for (var r = 0; r < rms.length; r++) {
                    var e = parentt + ' ' + rms[r];
                    $$$(e.toString()).remove();
                    if (AlextCore.domain == 'detail.1688.com') {
                        $$$(parentt).css({ height: '100px' });
                    }
                }
            }

            if (AlextOrder.isAllowedCategory() && !AlextOrder._nhtqAlertVipProduct()) {
                var style = 'background-color: #FFFFFF; position: absolute; z-index:9999999;';
                if (page === 'taobao') {
                    style = 'margin-top: 15px;';
                }
                var orderBtn =
                    '<div style="' + style + '">\
							<p>\
								<b style="color: red; font-size: 14px;">\
									L\u01b0u \u00fd: \
								</b>\
								<span style="color:blue;">\
									Qu\u00fd kh\u00e1ch vui l\u00f2ng kh\u00f4ng s\u1eed d\u1ee5ng Google translate khi \u0111\u1eb7t h\u00e0ng\
								</span>\
							</p>\
							<a href="javascript:void(0)" id="alitaobao_order" class="alitaobao-button alitaobao-button-large alitaobao-button-important">\
								\u0110\u1eb7t h\u00e0ng\
							</a>\
						</div>';

                $$$(parentt).append(orderBtn);

                AlextOrder.actionOrderClick();
            } else {
                var error =
                    '<div style="width: 400px;color: #b94a48;background-color: #f2dede;border-color: #eed3d7;padding: 10px;margin-bottom: 10px;">\
							S\u1ea3n ph\u1ea9m n\u00e0y kh\u00f4ng n\u1eb1m trong danh m\u1ee5c \u0111\u1eb7t h\u00e0ng c\u1ee7a ch\u00fang t\u00f4i. \
							B\u1ea1n vui l\u00f2ng li\u00ean h\u1ec7 v\u1edbi b\u1ed9 ph\u1eadn CSKH \u0111\u1ec3 \u0111\u01b0\u1ee3c gi\u1ea3i \u0111\u00e1p!\
						</div>';
                $$$(parentt).append(error);
            }

        }, 1000);
    },
    actionOrderClick: function() {
        $$$('#alitaobao_order').click(function() {
            AlextCore.nhtqDisableBtnClick('alitaobao_order');
            switch (AlextCore.nhtqIsDetailPage()) {
                case 'item.taobao.com':
                    AlextOrder.nhtqOrderTaobao();
                    break;
                case 'detail.tmall.com':
                    AlextOrder.nhtqOrderTmall();
                    break;
                case 'detail.1688.com':
                    AlextOrder.nhtqOrder1688();
                    break;
            }
        });
    },
    nhtqOrderTaobao: function() {
        if (AlextOrder._nhtqIsVipProduct()) {
            return;
        }
        var productDetail = AlextOrder.productDetail();
        var productConfig = AlextConfig.order.product[AlextCore.domain];

        var orderDetail = {
            price: 0,
            quantity: 0,
            name: ''
        };
        var price = 0;
        if ($$$(productConfig.priceTag.idOfficial).hasClass(productConfig.priceTag.del) || $$$(productConfig.priceTag.idOfficial).css('text-decoration') == 'line-through') {
            price = $$$(productConfig.priceTag.promo).text();
        } else {
            price = $$$(productConfig.priceTag.official).text();
        }
        if (!price || price == '') {
            price = 0;
        } else {
            price = price.replace(/([^0-9\.\,]+)/gim, "");
        }
        orderDetail.price = price;
        var number = $$$(productConfig.quantityTag).val(); // Số lượng đặt
        if (!number || number == '') {
            number = 0;
        }
        orderDetail.quantity = number;

        var propertyName = '';
        var propertyImage = '';
        var skuMap = ';';

        $$$(productConfig.skuTag.element).each(function() {
            if ($$$(this).hasClass(productConfig.skuTag.select)) {
                var pTag = $$$(productConfig.skuTag.subElement, this);

                propertyName += pTag.text() + ';';
                if (pTag[0].style !== undefined && pTag[0].style !== null && pTag[0].style.backgroundImage !== undefined && pTag[0].style.backgroundImage !== null) {
                    propertyImage = pTag[0].style.backgroundImage.slice(4, -1).replace(/"/g, "").replace("30x30", "400x400").trim();
                }

                skuMap += $$$(this).attr(productConfig.skuTag.data) + ';';
            }
        });

        if (propertyName.length > 0) {
            propertyName = propertyName.substring(0, propertyName.length - 1);
        }

        var skuMaps = productConfig.globalDataConfig();
        if (skuMaps != null) {
            if (skuMap in skuMaps && propertyName != '') {
                orderDetail.name = propertyName;
            }
        } else {
            var numSkuTag = $$$(AlextConfig.order.product[window.location.host].skuTag.elementEach).length;
            if (numSkuTag > 0) {
                if (AlextCore.nhtqValidateSkuSelect()) {
                    orderDetail.name = propertyName;
                }
            } else {
                orderDetail.name = '0';
            }
        }
        orderDetail.image = propertyImage;
        productDetail.id = productConfig.itemId();
        productDetail.list_sku.push(orderDetail);

        AlextOrder.nhtqDoOrder(productDetail);
    },
    _nhtqIsVipProduct: function() {
        AlextCore.nhtqEnableBtnClick('alitaobao_order');
        if (AlextConfig.order.product[AlextCore.domain].vipTag.length > 0) {
            var tag = AlextConfig.order.product[AlextCore.domain].vipTag[0];
            if ($$$(tag).length > 0) {
                AlextOrder.nhtqShowPopup({ code: 3 },
                    'Hi\u1ec7n t\u1ea1i h\u1ec7 th\u1ed1ng kh\u00f4ng th\u1ec3 \u0111\u1eb7t h\u00e0ng s\u1ea3n ph\u1ea9m n\u00e0y');
                return true;
            }
            return false;
        }
        return false;
    },
    _nhtqAlertVipProduct: function() {
        if (AlextConfig.order.product[AlextCore.domain].vipTag.length > 0) {
            var tag = AlextConfig.order.product[AlextCore.domain].vipTag[0];
            if ($$$(tag).length > 0) {
                $$$(tag).text('H\u1ec7 th\u1ed1ng kh\u00f4ng th\u1ec3 \u0111\u1eb7t h\u00e0ng s\u1ea3n ph\u1ea9m n\u00e0y');
                return true;
            }
            return false;
        }
        return false;
    },
    nhtqOrderTmall: function() {
        if (AlextOrder._nhtqIsVipProduct()) {
            return;
        }
        var productDetail = AlextOrder.productDetail();
        var productConfig = AlextConfig.order.product[AlextCore.domain];

        var orderDetail = {
            price: 0,
            quantity: 0,
            name: ''
        };

        var number = $$$(productConfig.quantityTag).val(); // Số lượng đặt
        if (!number || number == '') {
            number = 0;
        }
        orderDetail.quantity = number;

        var propertyName = '';
        var propertyImage = '';
        var skuMap = ';';

        $$$(productConfig.skuTag.element).each(function() {
            if ($$$(this).hasClass(productConfig.skuTag.select)) {
                var pTag = $$$(productConfig.skuTag.subElement, this);
                if (pTag !== undefined && pTag.length > 0) {
                    propertyName += pTag.text().trim() + ';';
                    if (pTag[0].style !== undefined && pTag[0].style !== null && pTag[0].style.backgroundImage !== undefined && pTag[0].style.backgroundImage !== null) {
                        propertyImage = pTag[0].style.backgroundImage.slice(4, -1).replace(/"/g, "").replace("40x40", "400x400").trim();
                        console.log(propertyImage);
                    }

                    skuMap += $$$(this).attr(productConfig.skuTag.data) + ';';
                }
            }
        });
        if (propertyName.length > 0) {
            propertyName = propertyName.substring(0, propertyName.length - 1);
        }
        if (productConfig.globalDataConfig() != null) {
            var skuMaps = productConfig.globalDataConfig().skuMap;
            if (skuMaps != null) {
                if (skuMap in skuMaps && propertyName != '') {
                    orderDetail.name = propertyName;
                }
            }
        } else {
            var numSkuTag = $$$(AlextConfig.order.product[window.location.host].skuTag.elementEach).length;
            if (numSkuTag > 0) {
                if (AlextCore.nhtqValidateSkuSelect()) {
                    orderDetail.name = propertyName;
                }
            } else {
                orderDetail.name = '0';
            }
        }
        orderDetail.image = propertyImage;

        // Neu cos gia khuyen mai thi lay gia khuyen mai
        var price = $$$(productConfig.priceTag.promo).text();
        if (price == '') {
            // Neu khong co gia khuyen mai thi lay gia goc hien thi tren trang
            price = $$$(productConfig.priceTag.official).text();
        }
        if (price == '') {
            // Neu khong co gia khuyen mai va khong lay duoc gia goc tren trang thi lay gia goc o config
            price = skuMaps[skuMap].price;
        }
        if (price == '') {
            // Neu khong the lay gia
            price = 0;
        } else {
            // Dinh dang gia
            price = price.replace(/([^0-9\.\,]+)/gim, "");
        }
        orderDetail.price = price;

        productDetail.id = productConfig.itemId();
        productDetail.list_sku.push(orderDetail);


        AlextOrder.nhtqDoOrder(productDetail);
    },
    nhtqOrder1688: function() {
        var productDetail = AlextOrder.productDetail();

        if (AlextConfig.order.product[AlextCore.domain].props === undefined) {
            if (iDetailData !== undefined && iDetailData.sku !== undefined && iDetailData.sku.skuProps !== undefined) {
                var t = [];
                iDetailData.sku.skuProps.map(function(prop) {
                    t.push(prop.value);
                });
                AlextConfig.order.product[AlextCore.domain].props = t;
            } else {
                AlextConfig.order.product[AlextCore.domain].props = null;
            }
        }

        var productConfig = AlextConfig.order.product[AlextCore.domain];

        if (typeof iDetailConfig !== 'undefined') {
            productDetail.min_quantity = iDetailConfig.beginAmount;
            if (iDetailConfig.isRangePriceSku === 'true') {
                productDetail.price_ranges = productConfig.globalDataConfig().sku.priceRange;
            }

            if (iDetailConfig.isSKUOffer == 'true') {
                if ($$$('.obj-list .list-selected').length > 0) {
                    $$$('.obj-list .list-selected .list-info table tr').each(function() {
                        var subName = $$$(this).attr('data-name');
                        $$$('.desc ul li', this).each(function() {
                            var orderDetail = {
                                price: 0,
                                quantity: 0,
                                name: ''
                            };

                            var skuData = $$$(this).attr('data-sku-config');
                            var skuObject = JSON.parse(skuData);
                            var skuName = skuObject.skuName;
                            var number = $$$('span .value', this).text();

                            var name = subName + '&gt;' + skuName;

                            var price = '';
                            var itemName = '';
                            if (productConfig.globalDataConfig().sku.skuMap[name]) {
                                price = productConfig.globalDataConfig().sku.skuMap[name].price;
                                itemName = name;
                            } else if (productConfig.globalDataConfig().sku.skuMap[skuName]) {
                                price = productConfig.globalDataConfig().sku.skuMap[skuName].price;
                                itemName = skuName;
                            }
                            orderDetail.price = price;
                            orderDetail.quantity = number;
                            orderDetail.name = itemName;
                            if (productConfig.props !== undefined && productConfig.props !== null) {
                                var arrName = orderDetail.name.split('&gt;');
                                for (var i = 0; i < arrName.length; i++) {
                                    if (productConfig.props[i] !== undefined) {
                                        for (var j = 0; j < productConfig.props[i].length; j++) {
                                            if (arrName[i] === productConfig.props[i][j].name && productConfig.props[i][j].imageUrl !== undefined) {
                                                orderDetail.image = productConfig.props[i][j].imageUrl;
                                                break;
                                            }
                                        }
                                        if (orderDetail.image !== undefined) {
                                            break;
                                        }
                                    }
                                }
                            }
                            console.log(orderDetail);

                            productDetail.list_sku.push(orderDetail);
                        });
                    });
                }
            } else {
                var orderDetail = {
                    price: 0,
                    quantity: 0,
                    name: ''
                };
                var number = $$$(".unit-detail-amount-control .amount-input").val();
                var price = 0;
                var priceRange = [];
                $$$("#mod-detail-price .price td").each(function() {
                    var range = [];
                    if ($$$(this).attr('data-range')) {
                        var priceJson = JSON.parse($$$(this).attr('data-range'));
                        range[0] = priceJson.begin;
                        range[1] = priceJson.price;

                        if (number >= parseInt(priceJson.begin)) {
                            price = priceJson.price;
                        }
                    }
                    if (range.length > 0) priceRange.push(range);
                });
                productDetail.price_ranges = priceRange;

                orderDetail.price = price;
                orderDetail.quantity = number;
                orderDetail.name = '0';

                productDetail.list_sku.push(orderDetail);
            }
        }

        productDetail.id = productConfig.itemId();
        AlextOrder.nhtqDoOrder(productDetail);
    },
    init: function() {
        if (AlextCore.nhtqIsDetailPage()) {
            AlextOrder.createButtonOrder(true);
        }
    }
};

var AlextTranslate = {
    nhtqTranslateBtn: function() {
        return '<div>\
							<a href="javascript:void(0)" id="alitaobao_translate_detail" class="alitaobao-button alitaobao-button-important">\
								D\u1ecbch\
							</a>\
						</div>'; },

    nhtqOriginLangBtn: function() {
        return '<div>\
							<a href="javascript:void(0)" id="alitaobao_origin_detail" class="alitaobao-button alitaobao-button-important" style="display:none;">\
								Hi\u1ec7n v\u0103n b\u1ea3n g\u1ed1c\
							</a>\
						</div>'; },


    /*
     * Dịch
     * @returns {undefined}
     */
    translate: function(cnWordArray, func) {
        var page = AlextCore.nhtqIsDetailPage();
        $$$.post(AlextAuth.translateUrl, { i: cnWordArray }, function(data) {
            if (page == 'detail.1688.com') {
                AlextTranslate._1688_showTranslateData(data);
            } else if (page == 'detail.tmall.com') {
                AlextTranslate._tmall_showTranslateData(data);
            } else if (page == 'item.taobao.com') {
                AlextTranslate._taobao_showTranslateData(data);
            }
            AlextConfig.translateData = data;
        }, 'json');
    },

    /*
     * Lấy dữ liệu tiếng trung để thực hiện dịch trang tmall
     * @returns {undefined}
     */
    _tmallGetDetailContext: function() {
        $$$("#J_AttrList").prepend(AlextTranslate.nhtqTranslateBtn());
        $$$("#J_AttrList").prepend(AlextTranslate.nhtqOriginLangBtn());

        var alext_tmall_detailContext = {};

        alext_tmall_detailContext.cnWordData = [];

        $$$("#J_AttrUL li").each(function() {
            var cnWord = $$$(this).text().split(String.fromCharCode(58, 160));
            for (var i = 0; i < cnWord.length; i++) {
                var singleWord = cnWord[i].split(String.fromCharCode(65292));
                for (var c = 0; c < singleWord.length; c++) {
                    alext_tmall_detailContext.cnWordData.push(singleWord[c]);
                }
            }
        });

        // Lấy dữ liệu sku
        if ($$$(".tb-sku .tb-prop").length > 0) {
            $$$(".tb-sku .tb-prop").each(function() {
                alext_tmall_detailContext.cnWordData.push($$$(".tb-metatit", this).text().trim());
                $$$("li", this).each(function() {
                    var skuCn = $$$("span", this).text().replace(String.fromCharCode(65292), " ").trim().split(" ");
                    for (var i = 0; i < skuCn.length; i++) {
                        alext_tmall_detailContext.cnWordData.push(skuCn[i]);
                    }
                });
            });
        }

        // Lấy dữ liệu tiếng trung tên các tab chi tiết, đánh giá ...
        setTimeout(function() {
            $$$("#J_TabBar li a").each(function() {
                var textTitle = $$$(this).contents().filter(function() {
                    return this.nodeType == Node.TEXT_NODE;
                }).text().trim();
                alext_tmall_detailContext.cnWordData.push(textTitle);
            });
        }, 10000);

        // Thực hiện dịch
        AlextTranslate.translate(alext_tmall_detailContext.cnWordData, "");
    },
    /*
     * Hiển thị dữ liệu đã dịch tmall
     * @returns {undefined}
     */
    _tmall_showTranslateData: function(data) {
        $$$("#alitaobao_translate_detail").click(function() {
            AlextTranslate._tmall_showTranslateAttributeList(data);
        });
        AlextTranslate._tmall_hideTranslateAttributeList();
    },
    _tmall_hideTranslateAttributeList: function() {
        $$$("#alitaobao_origin_detail").click(function() {
            $$$("#J_AttrUL").show();
            $$$("#alitaobaoTranslateUl").remove();
            $$$("#alitaobao_translate_detail").show();
            $$$("#alitaobao_origin_detail").hide();
        });
    },
    _tmall_showTranslateAttributeList: function(data) {
        $$$("#alitaobaoTranslateUl").remove();
        var alext_tmall_showTranslateData = {};
        alext_tmall_showTranslateData.ul = "<ul id='alitaobaoTranslateUl'>";

        $$$("#J_AttrUL li").each(function() {
            alext_tmall_showTranslateData.li = "<li>";
            alext_tmall_showTranslateData.cnWord = $$$(this).text().split(String.fromCharCode(58, 160));

            if (alext_tmall_showTranslateData.cnWord.length < 2) {
                alext_tmall_showTranslateData.cnWord = $$$(this).text().split(String.fromCharCode(65306));
            }
            var _transFlag_0 = false;

            for (var k = 0; k < data.length; k++) {
                if (alext_tmall_showTranslateData.cnWord[0] != "" && data[k].key == alext_tmall_showTranslateData.cnWord[0] && data[k].value != null) {

                    alext_tmall_showTranslateData.li = alext_tmall_showTranslateData.li + data[k].value;
                    _transFlag_0 = true;
                    break;
                }
            }
            if (_transFlag_0 == false) {
                alext_tmall_showTranslateData.li = alext_tmall_showTranslateData.li + alext_tmall_showTranslateData.cnWord[0];
            }

            alext_tmall_showTranslateData.li = alext_tmall_showTranslateData.li + ": ";
            alext_tmall_showTranslateData.singleWord = alext_tmall_showTranslateData.cnWord[1].split(String.fromCharCode(65292));

            for (var c = 0; c < alext_tmall_showTranslateData.singleWord.length; c++) {

                var _transFlag_1 = false;

                for (var k = 0; k < data.length; k++) {

                    if (alext_tmall_showTranslateData.singleWord[c] != "" && data[k].key == alext_tmall_showTranslateData.singleWord[c] && data[k].value != null) {

                        alext_tmall_showTranslateData.li = alext_tmall_showTranslateData.li + data[k].value + ",";
                        _transFlag_1 = true;
                        break;
                    }
                }
                if (_transFlag_1 == false) {
                    alext_tmall_showTranslateData.li = alext_tmall_showTranslateData.li + alext_tmall_showTranslateData.singleWord[c] + ",";
                }
            }
            alext_tmall_showTranslateData.li = alext_tmall_showTranslateData.li.substring(0, (alext_tmall_showTranslateData.li.length - 1));
            alext_tmall_showTranslateData.li = alext_tmall_showTranslateData.li + "</li>";
            alext_tmall_showTranslateData.ul = alext_tmall_showTranslateData.ul + alext_tmall_showTranslateData.li;
        });

        alext_tmall_showTranslateData.ul = alext_tmall_showTranslateData.ul + "</ul>";

        $$$("#J_AttrList").append(alext_tmall_showTranslateData.ul);
        $$$("#J_AttrUL").hide();

        $$$("#alitaobao_translate_detail").hide();
        $$$("#alitaobao_origin_detail").show();
    },

    _tmallShowTranslateSkuTitle: function(transData) {
        if ($$$(".tb-sku .tb-prop").length > 0) {
            $$$(".tb-sku .tb-prop").each(function() {
                var flag = false;
                var skuTypeCn = $$$(".tb-metatit", this).text().trim();
                for (var i = 0; i < transData.length; i++) {
                    if (transData[i].key == skuTypeCn && transData[i].value != null) {
                        $$$(".tb-metatit", this).attr("title", transData[i].value);
                        $$$(".tb-metatit", this).text(transData[i].value);
                        flag = true;
                        break;
                    }
                }
                if (flag == false) {
                    $$$(".tb-metatit", this).attr("title", skuTypeCn);
                }

                $$$("li", this).each(function() {
                    var vnText = "";
                    var skuCn = $$$("span", this).text().replace(String.fromCharCode(65292), " ").trim().split(" ");
                    for (var j = 0; j < skuCn.length; j++) {
                        flag = false;
                        for (var k = 0; k < transData.length; k++) {
                            if (transData[k].key == skuCn[j] && transData[k].value != null) {
                                vnText = vnText + transData[k].value + ",";
                                flag = true;
                                break;
                            }
                        }
                        if (flag == false) {
                            vnText = vnText + skuCn[j] + ",";
                        }
                    }
                    vnText = vnText.substring(0, vnText.length - 1);
                    $$$(this).attr("title", vnText);
                });
            });
        }
        // Hiển thị tên tiếng việt các tab
        setTimeout(function() {
            $$$("#J_TabBar li a").each(function() {
                var textTitle = $$$(this).contents().filter(function() {
                    return this.nodeType == Node.TEXT_NODE;
                }).text().trim();

                var count = '';
                if ($$$('em', this).length > 0) {
                    count = $$$('em', this).text().trim();
                }
                var strCount = ''
                if (count != '') {
                    strCount = '<em>' + count + '</em>';
                }

                for (var k = 0; k < transData.length; k++) {
                    if (transData[k].key == textTitle && transData[k].value != null) {

                        var titleVn = transData[k].value.charAt(0).toUpperCase() + transData[k].value.slice(1);
                        $$$(this).html(titleVn + strCount);
                        break;
                    }
                }
            });
        }, 11000);
    },


    _taobaoGetDetailContext: function() {
        $$$("#attributes").prepend(AlextTranslate.nhtqTranslateBtn());
        $$$("#attributes").prepend(AlextTranslate.nhtqOriginLangBtn());
        $$$("#attributes .attributes-list").attr("id", "alitaobao_origin_lang");

        var alext_taobao_detailContext = {};

        alext_taobao_detailContext.cnWordData = [];

        $$$("#attributes li").each(function() {
            var taobaoCnWord = $$$(this).text().split(String.fromCharCode(58, 32));
            for (var i = 0; i < taobaoCnWord.length; i++) {
                var singleWord = AlextCore.stringReplaceAll(String.fromCharCode(65292), " ", taobaoCnWord[i]);
                singleWord = singleWord.trim().split(" ");
                for (var c = 0; c < singleWord.length; c++) {
                    alext_taobao_detailContext.cnWordData.push(singleWord[c]);
                }
            }
        });

        // Lấy dữ liệu dịch sku
        $$$("#J_isku .J_Prop.tb-prop").each(function() {
            alext_taobao_detailContext.cnWordData.push($$$(".tb-property-type", this).text().trim());
            $$$("li", this).each(function() {
                var skuCn = $$$("span", this).text().trim();
                skuCn = AlextCore.stringReplaceAll("--", " ", skuCn).split(" ");
                for (var i = 0; i < skuCn.length; i++) {
                    alext_taobao_detailContext.cnWordData.push(skuCn[i]);
                }
            });
        });

        $$$(".tb-meta .tb-property-type").each(function() {
            alext_taobao_detailContext.cnWordData.push($$$(this).text().trim());
        });
        $$$("#J_isku .tb-property-type").each(function() {
            alext_taobao_detailContext.cnWordData.push($$$(this).text().trim());
        });

        // Lấy dữ liệu tiếng trung để dịch tiêu đề các tab
        $$$("#J_TabBar li a").each(function() {
            var textTitle = $$$(this).contents().filter(function() {
                return this.nodeType == Node.TEXT_NODE;
            }).text().trim();
            alext_taobao_detailContext.cnWordData.push(textTitle);
        });
        // Tạm bỏ dịch sku với taobao
        //if(AlextCore.nhtqIsDetailPage() == 'item.taobao.vn') {
        AlextTranslate.translate(alext_taobao_detailContext.cnWordData, "");
        //}
        //_ALEXT.translate(alext_taobao_detailContext.cnWordData,"");
    },
    _taobao_showTranslateData: function(data) {
        $$$("#alitaobao_translate_detail").click(function() {
            AlextTranslate._taobao_showTranslateAttributeList(data);
        });
        AlextTranslate._taobao_hideTranslateAttributeList();
    },
    _taobao_hideTranslateAttributeList: function() {
        $$$("#alitaobao_origin_detail").click(function() {
            $$$("#alitaobao_origin_lang").show();
            $$$("#alitaobaoTranslateUl").remove();

            $$$("#alitaobao_origin_detail").hide();
            $$$("#alitaobao_translate_detail").show();
        });
    },
    _taobao_showTranslateAttributeList: function(data) {
        $$$("#alitaobaoTranslateUl").remove();
        var alext_taobao_showTranslateData = {};
        alext_taobao_showTranslateData.ul = "<ul id='alitaobaoTranslateUl' class = 'attributes-list'>";

        $$$("#attributes li").each(function() {
            alext_taobao_showTranslateData.li = "<li>";
            var taobaoCnWord = $$$(this).text().trim().split(String.fromCharCode(58, 32));
            var flag_0 = false;

            for (var i = 0; i < data.length; i++) {
                var wtmp = taobaoCnWord[0].trim();
                if (wtmp != "" && data[i].key == wtmp && data[i].value != null) {

                    alext_taobao_showTranslateData.li = alext_taobao_showTranslateData.li + data[i].value;
                    flag_0 = true;
                    break;
                }
            }
            if (flag_0 == false) {
                alext_taobao_showTranslateData.li = alext_taobao_showTranslateData.li + taobaoCnWord[0];
            };

            if (taobaoCnWord.length > 1) {
                alext_taobao_showTranslateData.li = alext_taobao_showTranslateData.li + ": ";
                var singleWord = AlextCore.stringReplaceAll(String.fromCharCode(65292), " ", taobaoCnWord[1]).split(" ");
                for (var j = 0; j < singleWord.length; j++) {
                    flag_1 = false;
                    for (var k = 0; k < data.length; k++) {
                        if (singleWord[j] != "" && data[k].key == singleWord[j] && data[k].value != null) {

                            alext_taobao_showTranslateData.li = alext_taobao_showTranslateData.li + data[k].value + ",";
                            flag_1 = true;
                            break;
                        }
                    }
                    if (flag_1 == false) {
                        alext_taobao_showTranslateData.li = alext_taobao_showTranslateData.li + singleWord[j] + ",";
                    }
                }
            }

            alext_taobao_showTranslateData.li = alext_taobao_showTranslateData.li.substring(0, (alext_taobao_showTranslateData.li.length - 1));
            alext_taobao_showTranslateData.li = alext_taobao_showTranslateData.li + "</li>";
            alext_taobao_showTranslateData.ul = alext_taobao_showTranslateData.ul + alext_taobao_showTranslateData.li;
        });
        alext_taobao_showTranslateData.ul = alext_taobao_showTranslateData.ul + "</ul>";

        $$$("#alitaobao_origin_lang").hide();
        $$$("#attributes").append(alext_taobao_showTranslateData.ul);

        $$$("#alitaobao_translate_detail").hide();
        $$$("#alitaobao_origin_detail").show();
    },
    _taobaoShowTranslateSkuTitle: function(transData) {
        $$$("#J_isku .J_Prop.tb-prop").each(function() {
            var skuTypeCN = $$$(".tb-property-type", this).text().trim();
            var flag = false;
            for (var i = 0; i < transData.length; i++) {
                if (transData[i].key == skuTypeCN && transData[i].value != null) {
                    $$$(".tb-property-type", this).attr("title", transData[i].value);
                    flag = true;
                    break;
                }
            }

            if (flag == false) {
                $$$(".tb-property-type", this).attr("title", skuTypeCN);
            }

            $$$("li", this).each(function() {
                var skuCn = $$$("span", this).text().trim();
                skuCn = AlextCore.stringReplaceAll("--", " ", skuCn).split(" ");
                var skuVn = "";
                flag = false;
                for (var j = 0; j < skuCn.length; j++) {
                    for (var k = 0; k < transData.length; k++) {
                        if (transData[k].key == skuCn[j] && transData[k].value != null) {
                            skuVn = skuVn + transData[k].value + " ";
                            flag = true;
                            break;
                        }
                    }
                }

                if (flag == false) {
                    $$$(this).attr("title", skuCn);
                } else {
                    $$$(this).attr("title", skuVn);
                }
            });
        });

        $$$(".tb-meta .tb-property-type").each(function() {
            var skuName = $$$(this).text().trim();
            for (var k = 0; k < transData.length; k++) {
                if (transData[k].key == skuName && transData[k].value != null) {
                    $$$(this).text(transData[k].value);
                    break;
                }
            }
        });
        $$$("#J_isku .tb-property-type").each(function() {
            var skuName = $$$(this).text().trim();
            for (var k = 0; k < transData.length; k++) {
                if (transData[k].key == skuName && transData[k].value != null) {
                    $$$(this).text(transData[k].value);
                    break;
                }
            }
        });

        // show title tiếng việt của các tab chi tiết,đánh giá...
        $$$("#J_TabBar li a").each(function() {
            var textTitle = $$$(this).contents().filter(function() {
                return this.nodeType == Node.TEXT_NODE;
            }).text().trim();

            var count = '';
            if ($$$('em', this).length > 0) {
                count = $$$('em', this).text().trim();
            }
            var strCount = ''
            if (count != '') {
                strCount = '<em>' + count + '</em>';
            }

            for (var k = 0; k < transData.length; k++) {
                if (transData[k].key == textTitle && transData[k].value != null) {
                    var titleVn = transData[k].value.charAt(0).toUpperCase() + transData[k].value.slice(1);
                    $$$(this).html(titleVn + strCount);
                    break;
                }
            }
        });
    },




    /*
     * Hiển thị dữ liệu đã được dịch
     * @returns {undefined}
     */
    _1688_showTranslateData: function(data) {
        $$$("#alitaobao_translate_detail").click(function() {
            AlextTranslate._1688_showTranslateAttributeList(data);
        });
        AlextTranslate._1688_hideTranslateAttributeList();
    },
    _1688_showTranslateAttributeList: function(data) {
        $$$("#alitaobao_translate_lang").remove();
        var alitaobaoShowTrans = {};
        alitaobaoShowTrans.tbody = "<tbody>";
        $$$("#mod-detail-attributes tbody tr").each(function() {
            alitaobaoShowTrans.tr = "<tr>";
            $$$("td", this).each(function(tdIndex) {
                var tdClass = "de-feature";
                var style = "";
                if ($$$("#mod-detail-attributes .obj-content").length > 0) {
                    style = "width: 15%";
                    if (tdIndex % 2) {
                        tdClass = "de-value";
                        style = "";
                    }
                }

                alitaobaoShowTrans.td = "<td class='" + tdClass + "' style='" + style + "'>";
                alitaobaoShowTrans.tdText = $$$(this).text();
                alitaobaoShowTrans.cnWord = alitaobaoShowTrans.tdText.split(String.fromCharCode(65306));

                var flag = false;

                for (var i = 0; i < data.length; i++) {
                    if (alitaobaoShowTrans.cnWord[0] != "" && data[i].key == alitaobaoShowTrans.cnWord[0] && data[i].value != null) {

                        alitaobaoShowTrans.td = alitaobaoShowTrans.td + data[i].value;
                        flag = true;
                        break;
                    }
                }
                if (flag == false) {
                    alitaobaoShowTrans.td = alitaobaoShowTrans.td + alitaobaoShowTrans.cnWord[0];
                }

                if (alitaobaoShowTrans.cnWord.length > 1) {
                    alitaobaoShowTrans.td = alitaobaoShowTrans.td + ": ";
                    for (var c = 1; c < alitaobaoShowTrans.cnWord.length; c++) {
                        alitaobaoShowTrans.word = alitaobaoShowTrans.cnWord[c];
                        alitaobaoShowTrans.words = AlextCore.stringReplaceAll(String.fromCharCode(44), " ", alitaobaoShowTrans.cnWord[c]); //  alitaobaoShowTrans.cnWord[c].replace(String.fromCharCode(44)," ");
                        alitaobaoShowTrans.words = alitaobaoShowTrans.words.split(" ");
                        for (var j = 0; j < alitaobaoShowTrans.words.length; j++) {
                            flag = false;
                            for (var k = 0; k < data.length; k++) {
                                if (alitaobaoShowTrans.words[j] != "" && data[k].key == alitaobaoShowTrans.words[j] && data[k].value != null) {

                                    alitaobaoShowTrans.td = alitaobaoShowTrans.td + data[k].value + ",";
                                    flag = true;
                                    break;
                                }
                            }
                            if (flag == false) {
                                alitaobaoShowTrans.td = alitaobaoShowTrans.td + alitaobaoShowTrans.words[j] + ",";
                            }
                        }
                    }
                }
                alitaobaoShowTrans.td = alitaobaoShowTrans.td.substring(0, alitaobaoShowTrans.td.length);
                alitaobaoShowTrans.td = alitaobaoShowTrans.td + "</td>";
                alitaobaoShowTrans.tr = alitaobaoShowTrans.tr + alitaobaoShowTrans.td;
            });
            alitaobaoShowTrans.tr = alitaobaoShowTrans.tr + "</tr>";
            alitaobaoShowTrans.tbody = alitaobaoShowTrans.tbody + alitaobaoShowTrans.tr;

        });
        alitaobaoShowTrans.tbody = alitaobaoShowTrans.tbody + "</tbody>";

        // Tạo bảng hiện thị dữ liệu đã được dịch với dữ liệu trong mảng: translateData
        alitaobaoShowTrans.table = '<table id="alitaobao_translate_lang">' + alitaobaoShowTrans.tbody + '</table>';

        $$$("#alitaobao_origin_lang").hide();
        if ($$$("#mod-detail-attributes .obj-content").length > 0) {
            $$$("#mod-detail-attributes .obj-content").append(alitaobaoShowTrans.table);
        } else {
            $$$("#mod-detail-attributes").append(alitaobaoShowTrans.table);
        }
        $$$("#alitaobao_translate_detail").hide();
        $$$("#alitaobao_origin_detail").show();
    },
    _1688_hideTranslateAttributeList: function() {
        $$$("#alitaobao_origin_detail").click(function() {
            $$$("#alitaobao_translate_lang").remove();
            $$$("#alitaobao_origin_lang").show();

            $$$("#alitaobao_translate_detail").show();
            $$$("#alitaobao_origin_detail").hide();
        });
    },

    /*
     * Lấy mô tả chi tiết sản phẩm 1688, tách thành các từ đơn lẻ để map dịch với từ điển alitaobao
     * @returns {undefined}
     */
    _1688GetDetailContext: function() {
        var alitaobaoDetailContext = {};
        $$$("#mod-detail-attributes").prepend(AlextTranslate.nhtqTranslateBtn()); // Tạo nút dịch
        $$$("#mod-detail-attributes").prepend(AlextTranslate.nhtqOriginLangBtn()); // Tạo nút hiện văn bản gốc

        $$$("#mod-detail-attributes table").attr("id", "alitaobao_origin_lang"); // Gán id cho bảng dữ liệu của văn bản gốc

        alitaobaoDetailContext.cnWordData = [];

        $$$("#mod-detail-attributes tbody td").each(function() {
            alitaobaoDetailContext.tdText = $$$(this).text();
            alitaobaoDetailContext.cnWord = alitaobaoDetailContext.tdText.split(String.fromCharCode(65306));
            for (var c = 0; c < alitaobaoDetailContext.cnWord.length; c++) {
                var singleWord = AlextCore.stringReplaceAll(String.fromCharCode(44), " ", alitaobaoDetailContext.cnWord[c]);
                singleWord = singleWord.split(" ");
                for (var k = 0; k < singleWord.length; k++) {
                    if (singleWord[k] != '')
                        alitaobaoDetailContext.cnWordData.push(singleWord[k]);
                }
            }
        });

        // Lấy title ảnh nhỏ của mỗi Sku sản phẩm
        if ($$$("#mod-detail .content .list  .thumb").length > 0) { // nếu trang có nhiều loại sku
            $$$("#mod-detail .content .leading.fd-clr .value.fd-clr .unit-detail-spec-operator").each(function() {
                if ($$$("a", this).attr("title") !== null && $$$("a", this).attr("title") != '') {
                    var imageTitleWord = $$$("a", this).attr("title");
                    if (imageTitleWord != null && imageTitleWord != "") {
                        imageTitleWord = AlextCore.stringReplaceAll(String.fromCharCode(65288), " ", imageTitleWord);
                        imageTitleWord = AlextCore.stringReplaceAll(String.fromCharCode(65289), " ", imageTitleWord);
                        imageTitleWord = imageTitleWord.trim().split(" ");

                        for (var k = 0; k < imageTitleWord.length; k++) {
                            if (imageTitleWord[k] != '')
                                alitaobaoDetailContext.cnWordData.push(imageTitleWord[k]);
                        }
                    }
                }
            });
        } else if ($$$("#mod-detail .content table tbody").length > 0) { // Nếu trang chỉ có 1 loại sku
            $$$("#mod-detail .content table tbody tr").each(function() {
                var nameTitleWord = $$$(".name span:not([class])", this).text(); // lấy text nếu có
                nameTitleWord = AlextCore.stringReplaceAll(String.fromCharCode(65288), " ", nameTitleWord);
                nameTitleWord = AlextCore.stringReplaceAll(String.fromCharCode(65289), " ", nameTitleWord);
                nameTitleWord = nameTitleWord.trim().split(" ");

                for (var j = 0; j < nameTitleWord.length; j++) {
                    if (nameTitleWord[j] != '')
                        alitaobaoDetailContext.cnWordData.push(nameTitleWord[j]);
                }

                var imageTitleWord = $$$(".image", this).attr("title"); // lấy title nếu có ảnh
                imageTitleWord = AlextCore.stringReplaceAll(String.fromCharCode(65288), " ", imageTitleWord);
                imageTitleWord = AlextCore.stringReplaceAll(String.fromCharCode(65289), " ", imageTitleWord);
                imageTitleWord = imageTitleWord.trim().split(" ");

                for (var k = 0; k < imageTitleWord.length; k++) {
                    if (imageTitleWord[k] != '')
                        alitaobaoDetailContext.cnWordData.push(imageTitleWord[k]);
                }
            });
        }
        // Lấy tiếng trung tên cột, và đơn vị của bảng chi tiết giá
        if ($$$("#mod-detail-price .table-wrap table thead tr th").length > 0) {
            $$$("#mod-detail-price .table-wrap table thead tr th").each(function() {
                var unit = $$$(".unit", this).text().trim().split(" ");
                for (var uindex = 0; uindex < unit.length; uindex++) {
                    if (unit[uindex] != '')
                        alitaobaoDetailContext.cnWordData.push(unit[uindex]);
                }

                var textTitle = $$$(this).contents().filter(function() {
                    return this.nodeType == Node.TEXT_NODE;
                }).text().trim();
                textTitle = AlextCore.stringReplaceAll(String.fromCharCode(65288), "", textTitle);
                textTitle = AlextCore.stringReplaceAll(String.fromCharCode(65289), "", textTitle);
                textTitle = textTitle.split(" ");
                for (var txtindex = 0; txtindex < textTitle.length; txtindex++) {
                    if (textTitle[txtindex])
                        alitaobaoDetailContext.cnWordData.push(textTitle[txtindex]);
                }
            });
        }
        if ($$$(".widget-custom-container .mod").length > 0) {
            $$$(".widget-custom-container .mod").each(function() {
                var dtitle = "";
                dtitle = $$$(".d-title", this).text().trim();
                dtitle = dtitle.split(" ");
                var dunit = "";
                dunit = $$$(".d-unit", this).text().trim();
                dunit = dunit.split(" ");

                for (var txtindex = 0; txtindex < dtitle.length; txtindex++) {
                    if (dtitle[txtindex] != '')
                        alitaobaoDetailContext.cnWordData.push(dtitle[txtindex]);
                }
                for (var unitindex = 0; unitindex < dunit.length; unitindex++) {
                    if (dunit[unitindex] != '')
                        alitaobaoDetailContext.cnWordData.push(dunit[unitindex]);
                }
            });
        }

        //
        if ($$$(".mod-detail-purchasing-multiple .content table").length > 0) {
            $$$(".mod-detail-purchasing-multiple .content table thead tr th").each(function() {
                var textCn = $$$(this).text().trim();
                textCn = textCn.split(" ");
                for (var index = 0; index < textCn.length; index++) {
                    if (textCn[index] != '')
                        alitaobaoDetailContext.cnWordData.push(textCn[index]);
                }
            });
        }
        if ($$$(".summary .amount-unit").length > 0) {
            var amountUnit = $$$(".summary .amount-unit").text().trim();
            if (amountUnit != '')
                alitaobaoDetailContext.cnWordData.push(amountUnit);
        }
        if ($$$(".summary .price-unit").length > 0) {
            var priceUnit = $$$(".summary .price-unit").text().trim();
            if (priceUnit != '')
                alitaobaoDetailContext.cnWordData.push(priceUnit);
        }
        // Lấy dữ liệu tiếng trung của tab chi tiết tab đánh giá...
        if ($$$("#mod-detail-otabs ul").length > 0) {
            $$$("#mod-detail-otabs ul li").each(function() {

                var textTitle = $$$("a span", this).contents().filter(function() {
                    return this.nodeType == Node.TEXT_NODE;
                }).text().trim();
                textTitle = AlextCore.stringReplaceAll(String.fromCharCode(40), "", textTitle);
                textTitle = AlextCore.stringReplaceAll(String.fromCharCode(41), "", textTitle);
                if (textTitle != '')
                    alitaobaoDetailContext.cnWordData.push(textTitle);
            });
        }

        // thực hiện dịch với dữ liệu được lấy
        AlextTranslate.translate(alitaobaoDetailContext.cnWordData, "");
    },

    _1688ShowTranslateSkuTitle: function(transData) {

        for (var i in AlextConfig.order.product['detail.1688.com'].skuTitleTranslateTag) {
            var config = AlextConfig.order.product['detail.1688.com'].skuTitleTranslateTag[i];
            if ($$$(config['check']).length > 0) {
                $$$(config['each']).each(function() {
                    var titleCn = $$$("a", this).attr("title");
                    if (titleCn == null || titleCn == '') {
                        titleCn = $$$(this).text();
                    }
                    if (titleCn != null && titleCn != "") {
                        titleCn = AlextCore.stringReplaceAll(String.fromCharCode(65288), " ", titleCn);
                        titleCn = AlextCore.stringReplaceAll(String.fromCharCode(65289), " ", titleCn).trim().split(" ");
                        var titleVn = "";
                        var flag = false;
                        for (var t = 0; t < transData.length; t++) {
                            if (transData[t].key == titleCn[0] && transData[t].value != null) {
                                titleVn = titleVn + transData[t].value;
                                titleVn = titleVn.charAt(0).toUpperCase() + titleVn.slice(1);
                                flag = true;
                                break;
                            }
                        }

                        if (flag == false) {
                            titleVn = titleVn + titleCn[0];
                        }

                        if (titleCn.length > 1) {
                            titleVn = titleVn + " (";
                            for (var i = 1; i < titleCn.length; i++) {
                                flag = false;
                                for (var k = 0; k < transData.length; k++) {
                                    if (transData[k].key == titleCn[i] && transData[k].value != null) {
                                        titleVn = titleVn + transData[k].value;
                                        flag = true;
                                        break;
                                    }
                                }
                                if (flag == false) {
                                    titleVn = titleVn + titleCn[i];
                                }
                            };

                            titleVn = titleVn + ")";
                        }
                        $$$("a", this).attr("title", titleVn);
                        $$$(".image", this).attr("title", titleVn);
                        $$$("img", this).attr("alt", titleVn);
                        $$$(this).attr("title", titleVn);
                    }
                });
                //break;
            } else if ($$$("#mod-detail .content table tbody").length > 0) {
                $$$("#mod-detail .content table tbody tr").each(function() {
                    var titleCn = "";
                    if ($$$(".image", this).length > 0) {
                        titleCn = $$$(".image", this).attr("title");
                    } else {
                        titleCn = $$$(".name span:not([class])", this).text();
                    }
                    //var titleCn = $$$(".image",this).attr("title");
                    titleCn = AlextCore.stringReplaceAll(String.fromCharCode(65288), " ", titleCn);
                    titleCn = AlextCore.stringReplaceAll(String.fromCharCode(65289), " ", titleCn).trim().split(" ");
                    var titleVn = "";

                    for (var t = 0; t < transData.length; t++) {
                        if (transData[t].key == titleCn[0]) {
                            titleVn = titleVn + transData[t].value;
                            break;
                        }
                    }

                    if (titleCn.length > 1) {
                        titleVn = titleVn + " (";
                        for (var i = 1; i < titleCn.length; i++) {
                            for (var k = 0; k < transData.length; k++) {
                                if (transData[k].key == titleCn[i]) {
                                    titleVn = titleVn + transData[k].value;
                                    break;
                                }
                            }
                        };
                        titleVn = titleVn + ")";
                    }
                    if ($$$(".image", this).length > 0) {
                        $$$(".image", this).attr("title", titleVn);
                        $$$("img", this).attr("alt", titleVn);
                    } else {
                        $$$(".name span:not([class])", this).attr("title", titleVn);
                    }
                });
            }
        }
        $$$("#mod-detail .content .list table thead tr th").each(function() {
            var textCn = $$$(this).text().trim();
            textCn = textCn.split(" ");
            var textVn = "";
            for (var index = 0; index < textCn.length; index++) {
                for (var t = 0; t < transData.length; t++) {
                    if (transData[t].key == textCn[index]) {
                        textVn += " " + transData[t].value;
                        break;
                    }
                }
            }
            $$$(this).text(textVn);
        });

        if ($$$("#mod-detail-price .table-wrap table thead tr th").length > 0) {
            $$$("#mod-detail-price .table-wrap table thead tr th").each(function() {
                var unit = $$$(".unit", this).text().trim().split(" ");
                var unitVn = "";
                for (var uindex = 0; uindex < unit.length; uindex++) {
                    for (var t = 0; t < transData.length; t++) {
                        if (transData[t].key == unit[uindex]) {
                            unitVn += " " + transData[t].value + " ";
                            break;
                        }
                    }
                }
                unitVn += "";

                var textTitle = $$$(this).contents().filter(function() {
                    return this.nodeType == Node.TEXT_NODE;
                }).text().trim();
                textTitle = AlextCore.stringReplaceAll(String.fromCharCode(65288), "", textTitle);
                textTitle = AlextCore.stringReplaceAll(String.fromCharCode(65289), "", textTitle);
                textTitle = textTitle.split(" ");
                var textTitleVn = "";
                for (var txtindex = 0; txtindex < textTitle.length; txtindex++) {
                    for (var t = 0; t < transData.length; t++) {
                        if (transData[t].key == textTitle[txtindex]) {
                            textTitleVn += " " + transData[t].value;
                            break;
                        }
                    }
                }

                if (unitVn != "  ") {
                    $$$(this).text(textTitleVn);
                    $$$(this).append('<span class="unit"> ( ' + unitVn + ' )</span>')
                } else
                    $$$(this).text(textTitleVn);
            });
        }

        if ($$$(".widget-custom-container .mod").length > 0) {
            $$$(".widget-custom-container .mod").each(function() {
                var dtitle = "";
                dtitle = $$$(".d-title", this).text().trim();
                dtitle = dtitle.split(" ");
                var dunit = "";
                dunit = $$$(".d-unit", this).text().trim();
                dunit = dunit.split(" ");

                var dtitleVn = "";
                for (var txtindex = 0; txtindex < dtitle.length; txtindex++) {
                    for (var t = 0; t < transData.length; t++) {
                        if (transData[t].key == dtitle[txtindex]) {
                            dtitleVn += " " + transData[t].value;
                            break;
                        }
                    }
                }
                $$$(".d-title", this).text(dtitleVn);

                var dunitVn = "";
                for (var unitindex = 0; unitindex < dunit.length; unitindex++) {
                    for (var t = 0; t < transData.length; t++) {
                        if (transData[t].key == dunit[unitindex]) {
                            dunitVn += " " + transData[t].value;
                            break;
                        }
                    }
                }
                $$$(".d-unit", this).text(dunitVn);
            });
        }

        if ($$$(".summary .amount-unit").length > 0) {
            var amountUnit = $$$(".summary .amount-unit").text().trim();
            for (var t = 0; t < transData.length; t++) {
                if (transData[t].key == amountUnit) {
                    $$$(".summary .amount-unit").text(transData[t].value);
                    break;
                }
            }
        }
        if ($$$(".summary .price-unit").length > 0) {
            var priceUnit = $$$(".summary .price-unit").text().trim();
            for (var t = 0; t < transData.length; t++) {
                if (transData[t].key == priceUnit) {
                    $$$(".summary .price-unit").text(transData[t].value);
                    break;
                }
            }
        }

        // Hiện dịch sku name dạng trang http://detail.1688.com/offer/40213243565.html
        if ($$$(".obj-header .obj-title").length > 0) {
            $$$(".obj-header .obj-title").each(function() {
                for (var t = 0; t < transData.length; t++) {
                    if (transData[t].key == $$$(this).text().trim()) {
                        $$$(this).text(transData[t].value);
                        break;
                    }
                }
            });
        }
        // Hiện dịch tip ảnh dạng trang http://detail.1688.com/offer/40213243565.html
        if ($$$(".obj-leading .list-leading").length > 0) {
            $$$(".obj-leading .list-leading li").each(function() {

                for (var t = 0; t < transData.length; t++) {
                    if (transData[t].key == $$$(".image", this).attr("title")) {
                        $$$(".image", this).attr("title", transData[t].value);
                        break;
                    }
                }
            });
        }
        // hiện dịch tab nội dung, tab đánh giá
        /*if($$$("#mod-detail-otabs ul").length > 0) {
        	$$$("#mod-detail-otabs ul li").each(function() {
        		var textTitle = $$$("a span",this).contents().filter(function() {
        			return this.nodeType == Node.TEXT_NODE;
        		}).text().trim();
        		textTitle = AlextCore.stringReplaceAll(String.fromCharCode(40),"",textTitle);
        		textTitle = AlextCore.stringReplaceAll(String.fromCharCode(41),"",textTitle);

        		for(var t = 0; t < transData.length; t++) {
        			if(transData[t].key == textTitle) {
        				var count = "";
        				if($$$("a span em",this).length > 0)
        					count = "(<em>"+$$$("a span em",this).text()+"</em>)";

        				var titleText = transData[t].value.charAt(0).toUpperCase() + transData[t].value.slice(1);
        				$$$("a span",this).text(titleText);
        				$$$("a span",this).append(count);
        				break;
        			}
        		}
        	});
        } */
    },


    pageMenuTranslate: {
        actionMenuTranslate: function(action, conf, data) {
            AlextTranslate.pageMenuTranslate.includeExternalCss();
            var elements = [];
            var cssClasses = [];
            var textHtmls = [];
            for (var i = 0; i < conf.length; i++) {
                if (AlextCore.domain == conf[i].page) {
                    elements = conf[i].element;
                    cssClasses = conf[i].cssClass;
                    textHtmls = conf[i].textHtml;
                    break;
                }
            }
            if (action == 'get') var dataCnWord = [];

            if (AlextCore.siteName[1] == 'taobao') {
                var menuReadMoreData = [];
                if (action == 'set') var dls = '';
                for (var irm = 0; irm < menuReadMoreData.length; irm++) {
                    if (action == 'get') {
                        dataCnWord.push(menuReadMoreData[irm].text);
                        for (var isub = 0; isub < menuReadMoreData[irm].subMarkets.length; isub++) {
                            dataCnWord.push(menuReadMoreData[irm].subMarkets[isub].text);
                        }
                    } else if (action == 'set') {
                        var dl = '<dl style="background-color: #FFFFFF;" class="nhtq-menu-show">';
                        if (data != null) {
                            for (var ivn = 0; ivn < data.length; ivn++) {
                                if (menuReadMoreData[irm].text == data[ivn].key) {
                                    dl += '<dt><a style="padding: 0px !important;" href="' + menuReadMoreData[irm].href + '" target="_blank">' + data[ivn].value + '</a></dt>';
                                    break;
                                }
                            }
                            for (var isub = 0; isub < menuReadMoreData[irm].subMarkets.length; isub++) {
                                for (var ivn = 0; ivn < data.length; ivn++) {
                                    if (menuReadMoreData[irm].subMarkets[isub].text == data[ivn].key) {
                                        dl += '<dd><a href="' + menuReadMoreData[irm].subMarkets[isub].href + '" target="_blank">' + data[ivn].value + '</a></dd>';
                                        break;
                                    }
                                }
                            }
                        }
                        dl += '</dl>';
                        dls += dl;
                    }
                }

                if (action == 'set') {
                    if ($$$(".more-button .more-content").length > 0) {
                        $$$(".more-button .more-content").html(dls);
                    } else {
                        $$$(".more-button").prepend('<div class="more-content">' + dls + '</div>');
                    }
                    if (data != null) {
                        AlextTranslate.pageMenuTranslate.actionTranslateTaobaoNav(data);
                    }
                }
            }

            //có thể lấy cấu hình dấu phân cách từ api
            var seps = [];
            seps.push(String.fromCharCode(65306));
            seps.push(String.fromCharCode(47));
            seps.push(String.fromCharCode(58));
            seps.push(String.fromCharCode(44));
            seps.push(String.fromCharCode(65292));
            seps.push(String.fromCharCode(32));

            if (AlextCore.siteName[1] == 'tmall') {
                if (action == 'get') {
                    var tmallCnText = []
                    if (typeof localStorage === 'undefined') {} else {
                        var localRE = new RegExp("^" + "/tmall-fp" + "."),
                            key;
                        for (key in localStorage) {
                            if (localRE.test(key)) {
                                var menu = localStorage[key];

                                menu = JSON.parse(menu);
                                var htmlStringData = menu.cacheData;
                                var htmlString = '';

                                try {
                                    htmlString = decodeURIComponent(htmlStringData);
                                } catch (e) {
                                    htmlString = htmlStringData;
                                }

                                if (htmlString != '') {
                                    var htmlObjData = $$$(htmlString);
                                    $$$(".sub-pannel-ctn a", htmlObjData).each(function() {
                                        var tmallCnTexDataSet = AlextTranslate.pageMenuTranslate.actionGetText($$$(this), seps);
                                        var tmallCnTextArraySet = tmallCnTexDataSet.cnTextArray;
                                        for (var t = 0; t < tmallCnTextArraySet.length; t++) {
                                            tmallCnText.push(tmallCnTextArraySet[t]);
                                        }
                                    });
                                }
                            }
                        }
                    }
                }

                if (action == 'set') {
                    $$$(".j_MenuNav.menu-nav").hover(function() {
                        setTimeout(function() {
                            $$$(".category-menu-content .category-sub-pannel").each(function() {
                                if ($$$(this).css('display') == 'block' && $$$(".nhtq-trans-status", this).length == 0) {
                                    $$$(".sub-pannel-ctn a", this).each(function() {

                                        var tmallCnTexData = AlextTranslate.pageMenuTranslate.actionGetText($$$(this), seps);
                                        var tmallCnTextArray = tmallCnTexData.cnTextArray;
                                        var tmallSepIndexArray = tmallCnTexData.sepIndexArray;

                                        var tmallVnText = '';

                                        for (var ti = 0; ti < tmallCnTextArray.length; ti++) {
                                            if (data != null) {
                                                var sep = '';
                                                if (tmallSepIndexArray.length > 0 && tmallSepIndexArray[ti] != null)
                                                    sep = tmallSepIndexArray[ti];
                                                for (var ivn = 0; ivn < data.length; ivn++) {
                                                    if (tmallCnTextArray[ti] == data[ivn].key) {
                                                        tmallVnText += data[ivn].value + sep;
                                                        break;
                                                    }
                                                }
                                            }
                                        }
                                        if (tmallVnText != '') {
                                            AlextTranslate.pageMenuTranslate.actionSetText($$$(this), tmallVnText);
                                        }
                                    });
                                    $$$(this).append('<div class="nhtq-trans-status" style="display: none;"></div>');
                                }
                            });
                        }, 300);
                    });
                }
            }

            for (var i = 0; i < elements.length; i++) {
                var cl = cssClasses[i];
                if (!cl) cl = '';
                var textHtml = textHtmls[i];
                if (elements[i] != '') {
                    $$$(elements[i]).each(function() {
                        switch (textHtml) {
                            case "0":
                                $$$(this).addClass(cl);

                                var cnTexData = AlextTranslate.pageMenuTranslate.actionGetText($$$(this), seps);
                                var cnTextArray = cnTexData.cnTextArray;
                                var sepIndexArray = cnTexData.sepIndexArray;

                                var vnText = '';
                                for (var si = 0; si < cnTextArray.length; si++) {
                                    if (cnTextArray[si] && cnTextArray[si] != '' && cnTextArray[si] != ' ') {

                                        if (action == 'get' && cnTextArray[si] != '') dataCnWord.push(cnTextArray[si]);
                                        else if (action == 'set') {
                                            if (data != null) {
                                                var sep = '';
                                                if (sepIndexArray.length > 0 && sepIndexArray[si] != null)
                                                    sep = sepIndexArray[si];
                                                for (var ivn = 0; ivn < data.length; ivn++) {
                                                    if (cnTextArray[si] == data[ivn].key) {
                                                        vnText += data[ivn].value + sep;
                                                        break;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                //Thực hiện chèn dữ liệu tiếng việt
                                if (action == 'set' && vnText != '')
                                    AlextTranslate.pageMenuTranslate.actionSetText($$$(this), vnText);

                                break;

                            case "1":
                                var htmlTextData = $$$(this).val();
                                var htmlObjData = $$$(htmlTextData);
                                $$$("a", htmlObjData).each(function() {
                                    $$$(this).addClass(cl);
                                    //có thể lấy cấu hình dấu phân cách từ api
                                    var cnTexData = AlextTranslate.pageMenuTranslate.actionGetText($$$(this), seps);
                                    var cnTextArray = cnTexData.cnTextArray;
                                    var sepIndexArray = cnTexData.sepIndexArray;

                                    var vnText = '';
                                    for (var si = 0; si < cnTextArray.length; si++) {
                                        if (cnTextArray[si] && cnTextArray[si] != '' && cnTextArray[si] != ' ') {

                                            if (action == 'get' && cnTextArray[si] != '') dataCnWord.push(cnTextArray[si]);
                                            else if (action == 'set') {
                                                if (data != null) {

                                                    var sep = '';
                                                    if (sepIndexArray.length > 0 && sepIndexArray[si] != null)
                                                        sep = sepIndexArray[si];

                                                    for (var ivn = 0; ivn < data.length; ivn++) {
                                                        if (cnTextArray[si] == data[ivn].key) {
                                                            vnText += data[ivn].value + sep;
                                                            break;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    if (action == 'set' && vnText != '')
                                        AlextTranslate.pageMenuTranslate.actionSetText($$$(this), vnText);
                                });

                                if (action == 'set')
                                    $$$(this).val(htmlObjData.prop("outerHTML"));

                                break;

                            case "2":
                                var jsonTextData = $$$(this).val();

                                var jsonObjectData = null;
                                try {
                                    jsonObjectData = JSON.parse(jsonTextData);
                                } catch (e) {}

                                if (jsonObjectData === null) {} else {
                                    if (!jsonObjectData.dynamic) {
                                        for (var oi = 0; oi < jsonObjectData.length; oi++) {
                                            if (action == 'get') dataCnWord.push(jsonObjectData[oi].cat_name);
                                            else if (action == 'set') {
                                                if (data != null) {
                                                    for (var ivn = 0; ivn < data.length; ivn++) {
                                                        if (data[ivn].key == jsonObjectData[oi].cat_name) {
                                                            jsonObjectData[oi].cat_name = data[ivn].value;
                                                            break;
                                                        }
                                                    }
                                                }
                                            }
                                        }

                                    } else if (jsonObjectData.dynamic && jsonObjectData.custom) {
                                        for (var ci = 0; ci < jsonObjectData.custom.length; ci++) {
                                            if (action == 'get') dataCnWord.push(jsonObjectData.custom[ci].cat_name);
                                            else if (action == 'set') {
                                                if (data != null) {
                                                    for (var ivn = 0; ivn < data.length; ivn++) {
                                                        if (data[ivn].key == jsonObjectData.custom[ci].cat_name) {
                                                            jsonObjectData.custom[ci].cat_name = data[ivn].value;
                                                            break;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    $$$(this).val(JSON.stringify(jsonObjectData));
                                }

                                break;
                        }
                    });
                }
            }
            if (action == 'get') {
                if (tmallCnText && tmallCnText.length > 0) {
                    dataCnWord = AlextTranslate.pageMenuTranslate.arrayUnique(dataCnWord.concat(tmallCnText));
                }
            }

            if (dataCnWord) AlextTranslate.pageMenuTranslate.actionDoTranslate(dataCnWord, conf);
        },
        actionDoTranslate: function(dataCnWord, conf) {
            $$$.post(AlextAuth.translateUrl, { s: JSON.stringify(dataCnWord) }, function(data) {
                AlextTranslate.pageMenuTranslate.actionMenuTranslate('set', conf, data);
            }, 'json');
        },

        actionSetText: function(THIS, vnText) {
            THIS.addClass('nhtq-font');
            THIS.contents().
            filter(function() {
                return this.nodeType == Node.TEXT_NODE;
            }).remove();

            THIS.prepend(AlextTranslate.pageMenuTranslate.upperFirstCase(vnText));
            THIS.contents().first().text(AlextTranslate.pageMenuTranslate.upperFirstCase(vnText));
            THIS.attr('title', AlextTranslate.pageMenuTranslate.upperFirstCase(vnText));
        },
        actionSetTextByElement: function(element, transData) {
            $$$(element).each(function() {
                for (var ivn = 0; ivn < transData.length; ivn++) {
                    if ($$$(this).text().trim() == transData[ivn].key) {
                        AlextTranslate.pageMenuTranslate.actionSetText($$$(this), transData[ivn].value);
                        break;
                    }
                }
            });
        },
        actionGetText: function(THIS, seps) {
            var cnText = THIS.contents().
            filter(function() {
                return this.nodeType == Node.TEXT_NODE;
            }).text().trim();

            cnText = AlextCore.stringReplaceAll('.', '', cnText);
            cnText = AlextCore.stringReplaceAll(String.fromCharCode(46), '', cnText);

            var cnTextArray = [];
            // Xử lý cấu hình dấu phân cách giữa các từ
            var sepIndex = [];
            for (var si = 0; si < seps.length; si++) {
                var indexOfSep = 1;
                while (indexOfSep > 0) {
                    indexOfSep = cnText.indexOf(seps[si], indexOfSep);
                    if (indexOfSep >= 0) sepIndex[indexOfSep] = seps[si];
                    indexOfSep++;
                }
            }
            var sepIndexArray = [];
            for (var sia = 0; sia < sepIndex.length; sia++) {
                if (sepIndex[sia] && sepIndex[sia] != null && sepIndex[sia] != '')
                    sepIndexArray.push(sepIndex[sia]);
            }

            if (seps && seps.length > 0) {

                var splitRegexString = '[';
                for (var se = 0; se < seps.length; se++) {
                    splitRegexString += '\\' + seps[se];
                }
                splitRegexString += ']';

                var splitRegex = new RegExp(splitRegexString);
                cnTextArray = cnText.split(splitRegex);
            } else cnTextArray.push(cnText);

            var cnTextData = {};
            cnTextData.cnTextArray = cnTextArray;
            cnTextData.sepIndexArray = sepIndexArray;

            return cnTextData;
        },
        actionTranslateTaobaoNav: function(transData) {
            if (typeof NAV === 'undefined') {} else {
                var extData = NAV.extData;
                if (extData) {
                    for (var ex = 0; ex < extData.length; ex++) {
                        for (var sub = 0; sub < extData[ex].length; sub++) {
                            for (var vnt = 0; vnt < transData.length; vnt++) {
                                if (extData[ex][sub].cat_name == transData[vnt].key) {
                                    extData[ex][sub].cat_name = transData[vnt].value;
                                    break;
                                }
                            }
                            for (var li = 0; li < extData[ex][sub].lists.length; li++) {
                                for (var v = 0; v < transData.length; v++) {
                                    if (extData[ex][sub].lists[li].cat_name == transData[v].key) {
                                        extData[ex][sub].lists[li].cat_name = transData[v].value;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    NAV.extData = extData;
                }
            }
        },
        arrayUnique: function(array) {
            var a = array.concat();
            for (var i = 0; i < a.length; ++i) {
                for (var j = i + 1; j < a.length; ++j) {
                    if (a[i] === a[j])
                        a.splice(j--, 1);
                }
            }

            return a;
        },
        upperFirstCase: function(text) {
            text = text.charAt(0).toUpperCase() + text.slice(1);
            return text;
        },
        getPropertyByRegex: function(obj, propName) {

            var helloRE = new RegExp("^" + propName + "."),
                key;
            for (key in obj)
                if (helloRE.test(key))
                    return obj[key];
            return null;
        },
        includeExternalCss: function() {
            var cssLink = '<link rel="stylesheet" type="text/css" href="' +
                AlextConfig.codeDomain + 'css/extension/translate-style.css?v=' +
                (new Date().getTime()) + '">';

            $$$('head').append(cssLink);
        },
        getSiteNameConfig: function(site) {
            $$$.ajax({
                type: "POST",
                url: AlextConfig.apiDomain + "Config/GetSiteNameConfig/",
                dataType: 'JSON',
                data: { url: site },
                xhrFields: { withCredentials: true },
                success: function(conf) {
                    if (conf) {
                        AlextTranslate.pageMenuTranslate.actionMenuTranslate('get', conf, null);
                    }
                }
            });
        }
    },
    init: function() {
        var page = AlextCore.nhtqIsDetailPage();
        if (page == 'detail.1688.com') {
            AlextTranslate._1688GetDetailContext();
        }
        if (page == 'detail.tmall.com') {
            AlextTranslate._tmallGetDetailContext();
        }
        if (page == 'item.taobao.com') {
            AlextTranslate._taobaoGetDetailContext();
        }
    }
};

var AlextAddVndPrice = {
    showRangeData: [],
    'tw.taobao.com': function() {
        $$$('.priceTagVn-taobao-detail').remove();
        setTimeout(function() {
            var priceConfig = AlextConfig.order.priceTag[AlextCore.domain].priceTag;
            var textPriceCn = 0;
            if ($$$(priceConfig.idOfficial).hasClass(priceConfig.del) || $$$(priceConfig.idOfficial).css('text-decoration') == 'line-through') {
                textPriceCn = $$$(priceConfig.promo).text().trim().replace('¥', ''); // lấy gía sản phẩm nếu có giảm giá
                var priceTag = AlextAddVndPrice._taobaoPriceTag(textPriceCn);
                //$$$(priceConfig.idOfficial).css({overflow: "inherit"});
                $$$(priceConfig.promo).parent().hide();
                $$$(priceConfig.promo).parent().after(priceTag);
            } else {
                textPriceCn = $$$(priceConfig.official).text().trim().replace('¥', '');
                var priceTag = AlextAddVndPrice._taobaoPriceTag(textPriceCn);
                //$$$(priceConfig.idOfficial).css({overflow: "inherit"});
                $$$(priceConfig.idOfficial).hide(); //.prepend(priceTag);
                $$$(priceConfig.idOfficial).parent().append(priceTag);
            }
        }, 500);
    },
    'world.taobao.com': function() {
        $$$('.priceTagVn-taobao-detail').remove();
        setTimeout(function() {
            var priceConfig = AlextConfig.order.priceTag[AlextCore.domain].priceTag;
            var textPriceCn = 0;
            if ($$$(priceConfig.idOfficial).hasClass(priceConfig.del) || $$$(priceConfig.idOfficial).css('text-decoration') == 'line-through') {
                textPriceCn = $$$(priceConfig.promo).text().trim().replace('¥', ''); // lấy gía sản phẩm nếu có giảm giá
                var priceTag = AlextAddVndPrice._taobaoPriceTag(textPriceCn);
                //$$$(priceConfig.idOfficial).css({overflow: "inherit"});
                $$$(priceConfig.promo).parent().hide();
                $$$(priceConfig.promo).parent().after(priceTag);
            } else {
                textPriceCn = $$$(priceConfig.official).text().trim().replace('¥', '');
                var priceTag = AlextAddVndPrice._taobaoPriceTag(textPriceCn);
                //$$$(priceConfig.idOfficial).css({overflow: "inherit"});
                $$$(priceConfig.idOfficial).hide(); //.prepend(priceTag);
                $$$(priceConfig.idOfficial).parent().append(priceTag);
            }
        }, 500);
    },
    'taiwan.tmall.com': function() {
        $$$('.priceTagVn-tmall-detail').remove();
        setTimeout(function() {
            var priceConfig = AlextConfig.order.priceTag[AlextCore.domain].priceTag;

            if ($$$("#J_PromoPrice").length > 0) {
                var bgColor = "";
                var bgImage = "";
                var color = "";
                bgColor = $$$("#J_PromoPrice").parent().css('background-color');
                bgImage = $$$("#J_PromoPrice").parent().css('background-image');
                color = $$$("#J_PromoPrice .tm-promo-price .tm-price").css('color');
                var width = $$$("#J_PromoPrice").parent().css('width');
                var height = $$$("#J_PromoPrice").parent().height() + 10 + "px";

                if (color == null || color == "")
                    color = "#c40000";

                var style = "background-color: " + bgColor + "; color: #fff; width: " + width + "; height: " + height;

                var textPriceCn = $$$("#J_PromoPrice .tm-price").text();
                if (textPriceCn) {
                    //var priceVn = AlextCore.nhtqPriceValue(textPriceCn);
                    var priceVn = AlextAddVndPrice._priceVnLabel(textPriceCn);
                    //var priceTag = AlextAddVndPrice._taobaoPriceTag(textPriceCn);
                    var unit = $$$("#J_PromoPrice .tm-promo-type").text();
                    var priceTag = '<div class="priceTagVn-tmall-detail"><span class="price-tag-vn" style="' + style + '">' + priceVn + ' vn\u0111  <em class="tm-promo-type" style="font-size: 14px;">' + unit + '  </em></span></div>';

                    $$$("#J_PromoPrice").prepend(priceTag);
                } else {
                    if ($$$("#J_StrPriceModBox").length > 0) {
                        textPriceCn = $$$("#J_StrPriceModBox .tm-price").text();
                        //var priceVn = AlextCore.nhtqPriceValue(textPriceCn);
                        var priceVn = AlextAddVndPrice._priceVnLabel(textPriceCn);
                        var priceTag = '<div class="priceTagVn-tmall-detail">\
										<span class="price-tag-vn" style="' + style + '">' + priceVn + ' vn\u0111  \
										<em class="tm-promo-type" style="font-size: 14px;">' + '  </em></span>\
										</div>';
                        $$$("#J_StrPriceModBox").prepend(priceTag);
                    }
                }
            }
        }, 50);
    },
    'detail.tmall.com': function() {
        AlextAddVndPrice['taiwan.tmall.com']();
    },
    'world.tmall.com': function() {
        AlextAddVndPrice['taiwan.tmall.com']();
    },
    'item.taobao.com': function() {
        AlextAddVndPrice['tw.taobao.com']();
    },
    'detail.1688.com': function() {
        AlextAddVndPrice._1688AddPriceRange();
        if ($$$(".content-wrapper").length > 0 || $$$(".widget-custom-container").length > 0) {
            $$$(".amount-up, .amount-down").click(function() {
                AlextAddVndPrice._1688AddPriceInputChange();
            });

            $$$('.amount-input').on('input', function() {
                setTimeout(function() {
                    AlextAddVndPrice._1688AddPriceInputChange();
                }, 200);
            });

            $$$('.amount-input').change(function() {
                setTimeout(function() {
                    AlextAddVndPrice._1688AddPriceInputChange();
                }, 200);
            });
        }
    },


    addPriceSearchPage: function() {
        var configKey = AlextCore.nhtqIsSearchPage();
        if (configKey) {
            if (AlextAddVndPrice.hasOwnProperty(configKey.func)) {
                var func = configKey.func;
                AlextAddVndPrice[func]();
            }
        }
    },
    'search.1688.com': function() {
        var maxScroll = 0
        if (maxScroll >= 0) {
            AlextAddVndPrice._1688AddPriceSearchPage();
        }
        $$$(window).scroll(function() {
            var currentScroll = $$$(document).scrollTop() + window.innerHeight;
            if (currentScroll > maxScroll) {
                AlextAddVndPrice._1688AddPriceSearchPage();
                maxScroll = currentScroll;
            }
        });

        $$$("#sw_mod_pagination_content a").click(function() {
            var begin = ($$$(this).attr("beginpage"));
            var url = (AlextCore.urlDetail.replace(/&beginPage=\d+/g, "").replace(/&offset=\d+/g, "") + '&beginPage=' + begin + "&offset=4");
            window.location.href = url;
        });
    },
    'search.taobao.com': function() {
        var configKey = AlextCore.nhtqIsSearchPage();
        var type = '';
        if (configKey) {
            type = configKey.type;
        }
        if (type == 'search') {
            $$$('.item .row.row-1.g-clearfix').each(function() {
                var textPriceCn = '';
                textPriceCn = $$$(".price.g_price.g_price-highlight strong", this).text();
                var priceVN = AlextCore.nhtqPriceValue(textPriceCn);
                var priceTag = '<div class="priceTagVn-taobao-">\
									<strong style="font-size: 18px;font-weight: bold; color:red;">' + priceVN +
                    '</strong>\
									<em style="font-size: 14px;font-weight: bold; color:red;"> vn\u0111</em>\
								</div>';
                $$$(this).prepend(priceTag);
            });
        } else if (type == 'list') {
            $$$(".item .info .price strong").each(function() {
                var textPriceCn = $$$(this).contents()
                    .filter(function() {
                        return this.nodeType == Node.TEXT_NODE; }).text();

                var priceVN = AlextCore.nhtqPriceValue(textPriceCn);

                var priceTag = '<strong style="z-index: 100;height: 25px;display: block;background-color: #FFFFFF;">' + priceVN + '<em style="font-size: 14px;font-weight: bold;"> vn\u0111</em></strong>';
                $$$(this).parent().prepend(priceTag);
            });
        }
    },
    'search.tmall.com': function() {
        var tag = AlextConfig.order.priceTag['search.tmall.com'];
        setTimeout(function() {
            $$$(tag.itemTag).each(function() {
                var textPriceCn = $$$(tag.priceTag, this).attr('title');
                var priceVN = AlextCore.nhtqPriceValue(textPriceCn);
                var priceTag = '<em class="priceTagVn-tmall">' + priceVN + ' vn\u0111</em>';
                $$$(tag.priceTag, this).before(priceTag);
            });
        }, 1000);
    },
    /**
     * Chèn giá cho trang search 1688 (sử dụng khi load trang search)
     * @returns {undefined}
     */
    _1688AddPriceSearchPage: function() {
        var tagConfig = {
            itemTag: function() {
                if ($$$("#sw_mod_searchlist .sm-offerShopwindow-item").length > 0) {
                    return "market";
                }
                return "global";
            },
            itemTagConfig: {
                market: '#sw_mod_searchlist .sm-offerShopwindow-item',
                global: '#sw_mod_searchlist .sm-offerShopwindow'
            },
            listPriceTagConfig: {
                market: '.price-info .ladder-price .ladder-price-item',
                global: '.sm-offerShopwindow-price .sm-offerShopwindow-priceRange li'
            },
            elementPriceTagConfig: {
                market: '.price-number',
                global: '.sm-offerShopwindow-priceRangeKey .su-price'
            },
            showPriceTagConfig: {
                market: '.price-info',
                global: '.sm-offerShopwindow-price'
            }
        };
        var type = tagConfig.itemTag();

        if ($$$("#sw_mod_searchlist").length > 0) {
            $$$(".priceTagVn-1688").remove();
            $$$(tagConfig.itemTagConfig[type]).each(function() {
                var thisLi = $$$(this);
                $$$(tagConfig.listPriceTagConfig[type], this).each(function() {
                    var priceCN = $$$(tagConfig.elementPriceTagConfig[type], this).text().replace(/([^0-9\.\,]+)/gim, "");
                    var priceVN = AlextCore.nhtqPriceValue(priceCN);
                    var unit = '<span style="font-size: smaller;"> vn\u0111</span>';
                    var width = '';
                    if (type == 'market') {
                        width = 'style="width: 90px;"';
                    }
                    var pricePTag =
                        '<p class="priceTagVn-1688" ' + width + '>' + priceVN + unit +
                        '</p>';
                    $$$(this).prepend(pricePTag);

                    if ($$$(this).is(':first-child')) {
                        var priceSpanTag =
                            '<span class="priceTagVn-1688">' + priceVN +
                            '<em style="font-size: small;"> vn\u0111</em>\n\
								</span>';
                        $$$(tagConfig.showPriceTagConfig[type], thisLi).prepend(priceSpanTag);
                    }
                });
            });
        }
    },

    _1688AddPriceRange: function() {
        // Giá trên (Giá theo khoảng số lượng sản phẩm đặt mua)
        $$$(".priceTagVn-1688-detail").remove();
        if ($$$("#mod-detail-price table.de-price-hd tbody tr").length > 0) {
            $$$("#mod-detail-price table.de-price-hd tbody tr").each(function() {
                var dataStr = $$$(this).attr('data-range');
                var dataRange = JSON.parse(dataStr);
                var priceVN = AlextCore.nhtqPriceValue(dataRange.price);
                var thisTr = $$$(this);
                var priceTag = '<span class="priceTagVn-1688-detail">' + priceVN + '<em> vn\u0111</em>';
                $$$("td", thisTr).each(function() {
                    if ($$$(this).is(':last-child')) {
                        var unitVn = '';
                        var unitCn = '';
                        unitCn = $$$(".unit", this).text();
                        unitCn = unitCn.trim().substring(1);
                        var unit = '<span class="unit" style="color:#444;">/' + unitCn + '</span></span>';
                        $$$(this).prepend(priceTag + unit);
                    }
                });
            });
        } else {
            if ($$$('#mod-detail-price table tbody .price').length > 0) {
                // Dạng trang http://detail.1688.com/offer/40071115954.html
                $$$('#mod-detail-price table tbody .price').each(function() {
                    $$$('td', this).each(function() {
                        var thisTd = $$$(this);
                        if ($$$(this).attr('data-range')) { // Ban theo khoang gia (price_range).
                            //var bgColor = thisTd.css('background-color');
                            //if(!bgColor)
                            bgColor = '#fff5e5';

                            var dataStr = $$$(this).attr('data-range');
                            var dataRange = JSON.parse(dataStr);
                            AlextAddVndPrice.showRangeData.push(dataRange);
                            var priceVN = AlextCore.nhtqPriceValue(dataRange.price);
                            var priceTag = '<span class="priceTagVn-1688-detail" style="background-color:' + bgColor + '; color: #c00; font-size: 25px; height: 40px;">' + priceVN + '<em> vn\u0111</em></span>';
                            thisTd.prepend(priceTag);
                        } else {
                            if (thisTd.hasClass('ladder-1-1')) {
                                //var bgColor = thisTd.css('background-color');
                                //if(!bgColor) {
                                bgColor = '#fff5e5';
                                //}

                                var priceVN = '';
                                var priceVnArray = [];
                                $$$('.value', this).each(function() {
                                    priceVnArray.push($$$(this).text().trim());
                                });
                                if (priceVnArray.length > 1) {
                                    priceVN = AlextCore.nhtqPriceValue(priceVnArray[0]) +
                                        ' -- ' +
                                        AlextCore.nhtqPriceValue(priceVnArray[1]);
                                } else {
                                    priceVN = AlextCore.nhtqPriceValue(priceVnArray[0]);
                                }

                                var priceTag = '<span class="priceTagVn-1688-detail" style="background-color:' + bgColor + '; color: #00; font-size: 25px; height: 40px;">' + priceVN + '<em> vn\u0111</em></span>';
                                thisTd.prepend(priceTag);
                            }
                        }
                    });
                });
            } else {
                var unitCn = $$$(".mod-detail-price-sku .d-content .unit-detail-price-display .unit").text();
                var priceVN = '';
                if ($$$('.mod-detail-price-sku .d-content .unit-detail-price-display .de-pnum-split').length == 0) {
                    var priceCn = $$$('.mod-detail-price-sku .d-content .unit-detail-price-display .de-pnum-ep').text() +
                        $$$('.mod-detail-price-sku .d-content .unit-detail-price-display .de-pnum').text();

                    priceVN = AlextCore.nhtqPriceValue(priceCn);

                } else {
                    var from = '';
                    var to = '';
                    $$$('.mod-detail-price-sku .d-content .unit-detail-price-display .de-pnum-ep').each(function(index) {

                        if (index == 0) {
                            from = $$$(this).text();
                        } else if (index == 1) {
                            to = $$$(this).text();
                        }
                    });
                    $$$('.mod-detail-price-sku .d-content .unit-detail-price-display .de-pnum').each(function(index) {

                        if (index == 0) {
                            from += $$$(this).text();
                        } else if (index == 1) {
                            to += $$$(this).text();
                        }
                    });
                    var priceVnFrom = AlextCore.nhtqPriceValue(from);
                    var priceVnTo = AlextCore.nhtqPriceValue(to);

                    priceVN = priceVnFrom + ' - ' + priceVnTo;
                }

                var priceTag = '<div  class="priceTagVn-1688-detail" style="width:200px;"><span>' + priceVN + '<em> vn\u0111</em> /' + unitCn + "</div>";
                $$$('.mod-detail-price-sku .d-content').prepend(priceTag);
            }
        }
    },

    _1688AddPriceInputChange: function() {
        setTimeout(function() {
            var totalPrice = AlextAddVndPrice._1688ReCalculator();
            // Trong trường hợp không lấy được giá tổng.
            if (totalPrice == 0) {

            }

            totalPrice = AlextCore.priceFormat(totalPrice);

            var priceTag = '<p class="priceTagVn-1688-summary" title="' + totalPrice + '">' + totalPrice + ' vn\u0111</p>';
            $$$(".priceTagVn-1688-summary").remove();
            $$$(".summary .amount-blk").each(function() {
                if ($$$(".price", this).length > 0) {
                    $$$(this).prepend(priceTag);
                }
            });
            $$$('.obj-list .list-total .price').prepend('<span class="priceTagVn-1688-summary" style="height:40px; margin-top:5px;" title="' + totalPrice + '">' + totalPrice + ' vn\u0111</span>')
        }, 100);
    },

    /**
     * Tính lại giá khi tăng số lượng
     */
    _1688ReCalculator: function() {
        var total = 0;
        var totalNumber = 0;
        // truong hop trang single
        var singleNumber = $$$("#mod-detail \
		.mod-detail-purchasing-single.mod .d-content .unit-detail-amount-control .amount-input").val();

        if (singleNumber && singleNumber > 0) {
            // truong hop single
            var priceVn = AlextCore.nhtqPriceValueNoneFormat(iDetailConfig.refPrice);
            total = (priceVn * singleNumber);
        } else {
            // lay du lieu o bang summary neu co
            if ($$$(".obj-list .list-selected").length > 0) {
                $$$(".obj-list .list-selected .list-info table tr").each(function() {
                    $$$(".desc ul li", this).each(function() {
                        // lay so luong san pham dat mua sau khi click voi tung sku tu data cua desc
                        var skuData = $$$(this).attr("data-sku-config");
                        var skuObject = JSON.parse(skuData);
                        totalNumber = totalNumber + parseInt(skuObject.amount);
                    });
                });

                // nếu bóc được khoảng giá trên html, thì xác định sản phẩm chỉ bán theo khoảng giá
                if (AlextAddVndPrice.showRangeData.length > 0) {
                    var price = AlextAddVndPrice.showRangeData[0].price;
                    for (var ik in AlextAddVndPrice.showRangeData) {
                        if ((totalNumber >= AlextAddVndPrice.showRangeData[ik].begin && totalNumber <= AlextAddVndPrice.showRangeData[ik].end) || (totalNumber >= AlextAddVndPrice.showRangeData[ik].begin && AlextAddVndPrice.showRangeData[ik].end == '')) {

                            price = AlextAddVndPrice.showRangeData[ik].price;
                            break;
                        }
                    }
                    var priceVn = AlextCore.nhtqPriceValueNoneFormat(price);
                    total = totalNumber * priceVn;
                } else {
                    // nếu không bóc được thì xác định sản phẩm bán theo giá cho từng sku
                    // với trường hợp này thì công thức tính toán tổng giá trị là tính tổng cộng của từng sku
                    // (sigma) Sum(skuNumber * skuPrice)
                    $$$(".obj-list .list-selected .list-info table tr").each(function() {
                        var subName = $$$(this).attr("data-name");
                        $$$(".desc ul li", this).each(function() {
                            // lay so luong san pham dat mua sau khi click voi tung sku tu data cua desc
                            var skuData = $$$(this).attr("data-sku-config");
                            var skuObject = JSON.parse(skuData);
                            var skuName = skuObject.skuName;
                            var number = parseInt(skuObject.amount);

                            var name = subName + "&gt;" + skuName;
                            if (typeof iDetailData.sku.skuMap[name] == 'undefined') {
                                name = subName;
                            }
                            if (iDetailData.sku.skuMap[name]) {
                                var skuMapDetail = iDetailData.sku.skuMap[name];
                                var price = 0;
                                if (typeof skuMapDetail.price != 'undefined') {
                                    price = skuMapDetail.price;
                                } else if (typeof iDetailData.sku.price != 'undefined') {
                                    price = iDetailData.sku.price;
                                    if (price) {
                                        iDetailData.sku.skuMap[name].price = price;
                                    }
                                } else {
                                    return null;
                                }
                                // neu co gia trong sku map thi lay trong khoang gia theo sku truoc (truong hop chi ban theo sku)

                                var priceVn = AlextCore.nhtqPriceValueNoneFormat(price);
                                total += (priceVn * number);
                            }
                        });
                    });
                }
            } else {
                $$$("#mod-detail .summary .sub-total.fd-clr ul li").each(function() {
                    var subName = $$$(".sub-name", this).text();
                    if ($$$(".sub-item", this).length > 0) {
                        $$$(".sub-item .info-item", this).each(function() {
                            var skuData = $$$(this).attr("data-sku-config");
                            var skuObject = JSON.parse(skuData);
                            var skuName = skuObject.skuName;
                            var number = $$$(".display em", this).text();
                            var name = subName + "&gt;" + skuName;

                            if (iDetailData.sku.skuMap[name]) {
                                var price = iDetailData.sku.skuMap[name].price;
                            }
                            var priceVn = AlextCore.nhtqPriceValueNoneFormat(price);
                            total += (priceVn * number);
                        });
                    } else {
                        var number = $$$(".sub-amount em", this).text().trim();
                        if (iDetailData.sku.skuMap[subName]) {
                            var price = iDetailData.sku.skuMap[subName].price;
                            var priceVn = AlextCore.nhtqPriceValueNoneFormat(price);
                            total += (priceVn * number);
                        }
                    }
                });
            }
        }

        return total;
    },

    _priceVnLabel: function(textPriceCn) {
        if (textPriceCn == '') {
            textPriceCn = 0;
        }

        var priceCnArray = AlextCore.nhtqSepPrice(textPriceCn);
        var priceVn = 0;
        if (priceCnArray.length > 1) {
            priceVn = AlextCore.nhtqPriceValue(priceCnArray[0]) + ' - ' + AlextCore.nhtqPriceValue(priceCnArray[1]);
        } else {
            priceVn = AlextCore.nhtqPriceValue(textPriceCn);
        }
        return priceVn;
    },
    /**
     *
     * @param {type} textPriceCn
     * @returns {String}
     */
    _taobaoPriceTag: function(textPriceCn) {
        var priceVn = AlextAddVndPrice._priceVnLabel(textPriceCn);
        var style = 'float:left;padding-left: 5px; \
					padding-top: 0px; height:45px; \
					margin-left: -98px; top:-10px !important; \
					color:#f40; font-size:25px;font-weight: bold;';

        var skuMaps = AlextConfig.order.product[AlextCore.domain].globalDataConfig();

        if (skuMaps !== null) {
            style = 'float:left;padding-left: 5px; \
					padding-top: 0px; height:45px; \
					margin-left: 0px; top: 0px !important; \
					color:#f40; font-size:25px;font-weight: bold;';
        } else {
            style = 'float:left;padding-left: 5px; \
					margin-left: 0px; top:0px !important; \
					padding-top: 0px; height:45px; \
					color:#f40; font-size:25px;font-weight: bold;';
        }
        var priceTag = '<strong style="' + style + '" class="priceTagVn-taobao-detail">' + priceVn +
            '<em class="tb-rmb"> vn\u0111</em>\
						</strong>';
        return priceTag;
    },
    init: function() {
        if (AlextAddVndPrice.hasOwnProperty(AlextCore.domain)) {
            AlextAddVndPrice[AlextCore.domain]();
            $$$(AlextConfig.order.product[AlextCore.domain].skuTag.element).click(function() {
                AlextAddVndPrice[AlextCore.domain]();
            });
        }

        setTimeout(function() {
            AlextAddVndPrice.addPriceSearchPage();
        }, 1000);
    }
};


var AlextInit = function() {
    var isInIframe = (window.location != window.parent.location) ? true : false;
    if (!isInIframe) {
        init.nhtqGetConfig();
        init.nhtqShowJivosite();
        //init.nhtqGetCategoryImport();

        AlextAuth.getCustomerInfo(); // Check đăng nhập lần đầu
        //init dat hang
        AlextOrder.init();
        setTimeout(function() {
            // init chen gia
            AlextAddVndPrice.init();
            AlextUtil.nhtqShowCategoryName();
            AlextUtil.nhtqShowShopPageImage();
        }, 2000);
        AlextTranslate.init();
        AlextUtil.init();
    }

    setInterval(function() {
        $$$.ajax({
            url: AlextConfig.apiDomain + 'config/keepRequest',
            data: {},
            type: 'POST',
            dataType: 'JSON',
            xhrFields: { withCredentials: true },
        });
    }, 600000);
};

var AlextUtil = {
    init: function() {
        if (AlextCore.nhtqIsDetailPage()) {
            AlextUtil.nhtqRedirectDetail();
            AlextUtil.createShowAllProductsShopBtn();
            AlextUtil.createFavouriteBtn();
            AlextUtil.nhtqShowItemId();
            //AlextUtil.nhtqShowShopPageImage();
        }
    },
    //
    nhtqRedirectDetail: function() {
        var detailPage = window.document.location.host;
        var redirectLink = AlextConfig.order.product[detailPage].redirectLinkDetail();
        var browserLink = window.document.location.href;
        if (browserLink.length > 100) {
            window.location = redirectLink;
        }
    },
    nhtqShowShopPageImage: function() {
        if (AlextConfig.is1688.shop()) {
            setTimeout(function() {
                $$$('.offer-list-row img, .offer-list-sub img').each(function() {
                    var iItem = $$$(this).attr('src');
                    if (/.gif$/i.test(iItem)) {
                        $$$(this).attr('src', $$$(this).attr('data-lazy-load-src'));
                    }
                });
            }, 2000);
        }
    },
    /**
     * Chèn nút show toàn bộ sản phẩm của shop
     * @param {type} appendElement
     * @param {type} shopUrl
     * @returns {undefined}
     */
    createShowAllProductsShopBtn: function() {
        if (AlextCore.nhtqIsDetailPage()) {
            var appendElement = AlextConfig.util.showShop[AlextCore.nhtqIsDetailPage()];
            var shopLink = AlextOrder.nhtqGetShopLink();
            if (shopLink != null && shopLink != '') {
                var shopID = new URL(shopLink).hostname.split(".")[0];
                var siteName = AlextCore.siteName[1];
                switch (siteName) {
                    case '1688':
                        shopLink = 'http://' + shopID + '.1688.com/page/offerlist.htm';
                        break;
                    case 'taobao':
                        shopLink = shopLink + '/search.htm';
                        break;
                }
            }
            var btnShow = '<div>\
								<a href="' + shopLink + '" id="alitaobao-show-all-products" target="_blank" class="alitaobao-button alitaobao-button-large alitaobao-button-important" style="margin-left: 5px; padding: 0 16px !important;">\
									S\u1ea3n ph\u1ea9m c\u00f9ng shop\
								</a>\
							</div>';

            if (AlextCore.domain === 'detail.tmall.com') {
                setTimeout(function() {
                    $$$(appendElement).prepend(btnShow);
                }, 2000);
            } else {
                $$$(appendElement).append(btnShow);
            }
        }
    },
    /**
     * Tạo nút lưu shop yêu thích và sản phẩm yêu thích
     * @param {type} shoplement
     * @param {type} itemElement
     * @returns {undefined}
     */
    createFavouriteBtn: function() {
        var shoplement = AlextConfig.util.favShop[AlextCore.nhtqIsDetailPage()],
            itemElement = AlextConfig.util.favItem[AlextCore.nhtqIsDetailPage()];
        var btnFavouriteShop = '<div>\
									<a href="javascript:void(0);" id="nhtqAddShopFav" class="lnk-add-fav-shop" title="L\u01b0u shop v\u00e0o danh s\u00e1ch y\u00eau th\u00edch">\
										L\u01b0u shop\
									</a>\
								</div>';
        $$$(shoplement).prepend(btnFavouriteShop);

        $$$(".lnk-add-fav-shop").hover(function() {
            $$$(this).addClass('hover');
        }, function() {
            $$$(this).removeClass('hover');
        });

        $$$(itemElement + " a").hide();
        $$$(itemElement + " span").hide();

        var btnFavouriteItem = '<a href="javascript:void(0)" id="nhtqAddItemFav" class="lnk-add-fav-item">Y\u00eau th\u00edch</a>';
        $$$(itemElement).prepend(btnFavouriteItem);

        AlextUtil.nhtqAddFavourite();
    },
    nhtqAddFavourite: function() {
        $$$("#nhtqAddShopFav").click(function() {
            var shopID = AlextOrder.nhtqGetShopId();

            var shopAddress = AlextOrder.nhtqGetShopAddress();

            var shopName = AlextOrder.nhtqGetShopName(); //$$$(AlextConfig.order.product[AlextCore.domain].shopNameTag).text().trim();
            var siteName = AlextCore.siteName[1];
            var shopUrl = '';
            var shopGradeImage = '';

            switch (siteName) {
                case '1688':
                    shopGradeImage = $$$(".companyname .supply-grade .image img").attr('src');
                    shopUrl = 'http://' + shopID + '.1688.com/page/offerlist.htm';
                    break;
                case 'taobao':
                    shopUrl = 'http://' + shopID + '.taobao.com';
                    var shopGrade = [];
                    var webBrowser = '';
                    if (navigator.userAgent.indexOf('Firefox') != -1) {
                        webBrowser = "Firefox";
                    } else if (navigator.userAgent.indexOf('Chrome') != -1) {
                        webBrowser = "Chrome";
                    }
                    $$$("#J_ShopInfo .tb-shop-rank dd i").each(function() {
                        var bg = $$$(this).css('background-image');
                        if (webBrowser === "Chrome") {
                            var pattern = /-webkit-image-set|moz-image-set|ms-image-set|o-image-set/g;
                            bg = bg.replace(pattern, "");
                            var bgs = bg.split(",");
                            var imageUrl = bgs[0].replace(/\(|url|\)/g, "").split(" ");
                            shopGrade.push(imageUrl[0]);
                        }
                        if (webBrowser === "Firefox") {
                            var imageUrl = bg.replace(/\(|url|\"|\'|\)/g, "");
                            shopGrade.push(imageUrl);
                        }
                    });
                    shopGradeImage = shopGrade.toString();
                    break;
                case 'tmall':
                    shopUrl = 'http://' + shopID + '.tmall.com';
                    break;
            }
            if (shopID != '' && shopName != '') {
                $$$.ajax({
                    url: AlextAuth.addFavouriteUrl,
                    data: {
                        postData: {
                            objectId: shopID,
                            objectType: 1,
                            objectName: shopName,
                            siteName: siteName,
                            shopAddress: shopAddress,
                            shopUrl: shopUrl,
                            shopGradeImage: shopGradeImage
                        }
                    },
                    type: 'POST',
                    dataType: 'JSON',
                    xhrFields: { withCredentials: true },
                    success: function(data) {
                        alert(data.msg);
                    }
                });
            }
        });

        $$$("#nhtqAddItemFav").click(function() {
            var siteName = AlextCore.siteName[1];
            var itemUrl = AlextCore.urlDetail;

            var itemID = AlextConfig.order.product[AlextCore.domain].itemId();
            var itemName = $$$(AlextConfig.order.product[AlextCore.domain].titleTag).text();
            var itemImage = $$$(AlextConfig.order.product[AlextCore.domain].imageTag).attr('src'); // Lấy ảnh đầu tiên của sản phẩm từ trang chính

            var price = '';
            var saleCount = '';

            switch (siteName) {
                case '1688':
                    price = iDetailData.sku.price;
                    if (price == '' && iDetailData.sku.priceRange)
                        price = iDetailData.sku.priceRange[0][1];

                    saleCount = iDetailData.sku.saleCount;
                    break;

                case 'taobao':

                    if ($$$("#J_StrPrice").hasClass("del")) {
                        price = $$$("#J_PromoPrice .tb-rmb-num").contents()
                            .filter(function() {
                                return this.nodeType == Node.TEXT_NODE;
                            }).text().trim(); // lấy gía sản phẩm nếu có giảm giá

                    } else {
                        price = $$$("#J_StrPrice .tb-rmb-num").contents()
                            .filter(function() {
                                return this.nodeType == Node.TEXT_NODE;
                            }).text().trim(); // nếu không có giảm giá
                    }

                    break;

                case 'tmall':
                    price = $$$(".tm-price").text();
                    break;
            }

            $$$.ajax({
                url: AlextAuth.addFavouriteUrl,
                data: {
                    postData: {
                        objectId: itemID,
                        objectType: 2,
                        objectName: itemName,
                        siteName: siteName,
                        itemImages: itemImage,
                        itemUrl: itemUrl,
                        itemPrice: price,
                        itemSaleCount: saleCount
                    }
                },
                type: 'POST',
                dataType: 'JSON',
                xhrFields: { withCredentials: true },
                success: function(data) {
                    alert(data.msg);
                }
            });
        });
    },
    /**
     * Chèn thẻ hướng dẫn phí ship
     * @returns {undefined}
     */
    nhtqAddDeliveryGuide: function() {
        var element = AlextConfig.util.showGuide[AlextCore.nhtqIsDetailPage()];
        $$$(element).append(
            '<span>\
				<a style="color: red;" href="http://nhaphangtrungquoc.vn/page/view?id=30" target="_blank"> \
					Xem h\u01b0\u1edbng d\u1eabn\
				</a>\
			</span>'
        );
    },
    // Hiển thị mã sản phẩm trên site gốc
    nhtqShowItemId: function() {
        var itemId = AlextConfig.order.product[AlextCore.domain].itemId();
        var selector = '';
        var tag = '',
            beginTag = '',
            endTag = '';

        switch (AlextCore.nhtqIsDetailPage()) {
            case 'detail.1688.com':
                selector = '.widget-custom.offerdetail_ditto_postage';
                beginTag = '<div class="widget-custom-container">';
                endTag = '</div>';
                break;
            case 'item.taobao.com':
                selector = '#J_isku';
                beginTag = '<div class="tb-clearfix" style="margin-top: 15px;">';
                endTag = '</div>';
                if ($$$(selector).length == 0) {
                    selector = '#J_isSku';
                    beginTag = '<div>';
                    endTag = '</div>';
                }
                break;
            case 'detail.tmall.com':
                selector = '.tb-meta';
                beginTag = '<dl class="tm-delivery-panel">';
                endTag = '</dl>';
                break;
        }

        if (itemId != '') {
            tag = beginTag +
                '<span style="color: red; font-size:15px;">\
								<b>M\u00e3 s\u1ea3n ph\u1ea9m: </b>' + itemId +
                //strCName+
                '</span>' +
                endTag;
            $$$(selector).append(tag);
        }
    },
    nhtqShowCategoryName: function() {
        var selector = '';
        var tag = '',
            beginTag = '',
            endTag = '';
        //		var urlSearch = 'http://s.taobao.com/search?cat=';
        switch (AlextCore.nhtqIsDetailPage()) {
            case 'detail.1688.com':
                //				urlSearch = 'http://s.1688.com/selloffer/offer_search.htm?categoryId=';
                selector = '.widget-custom.offerdetail_ditto_postage';
                beginTag = '<div class="widget-custom-container">';
                endTag = '</div>';
                break;
            case 'item.taobao.com':
                selector = '#J_isku';
                beginTag = '<div class="tb-clearfix" style="margin-top: 15px;">';
                endTag = '</div>';
                if ($$$(selector).length == 0) {
                    selector = '#J_isSku';
                    beginTag = '<div>';
                    endTag = '</div>';
                }
                break;
            case 'detail.tmall.com':
                selector = '.tb-meta';
                beginTag = '<dl class="tm-delivery-panel">';
                endTag = '</dl>';
                break;
        }
        //		var categoryId = AlextConfig.order.product[AlextCore.domain].categoryId();
        var categories = AlextConfig.order.category;
        var strCName = '';
        if (categories.length > 0) {
            var cName = categories[0].category_name;
            if (typeof cName !== 'undefined' && cName !== '') {
                strCName = '<b>S\u1ea3n ph\u1ea9m thu\u1ed9c danh m\u1ee5c: </b>' + cName;
            }
        }
        //		else {
        //			if(categoryId && categoryId !== '') {
        //				strCName = '<b>S\u1ea3n ph\u1ea9m thu\u1ed9c danh m\u1ee5c: </b><a href="'+urlSearch+categoryId+'" target="_blank">'+categoryId+'</a>';
        //			}
        //		}
        if (strCName !== '') {
            tag = beginTag +
                '<span style="color: red; font-size:15px;">' + strCName +
                '</span>' +
                endTag;
            $$$(selector).append(tag);
        }
    }
};
$$$.noConflict();
$$$(document).ready(function() {
    AlextInit();
});
