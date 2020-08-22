const echarts_options = 
{
    title: {
        documentation: "https://echarts.apache.org/en/option.html#title",
        dataType: "object",
        properties: {
            id: { dataType: "string" },
            show: { dataType: "bool", default: true },
            text: { dataType: "string", default: "" },
            link: { dataType: "string", default: "" },
            target: {
                dataType: "string",
                values: [ "blank", "self" ],
                default: "blank"
            },
            textStyle: {
                dataType: "object",
                properties: {
                    color: { dataType: "color", default: "#333" },
                    fontStyle: {
                        dataType: "string",
                        values: [ "normal", "italic", "oblique" ],
                        default: "normal"
                    },
                    fontWeight: {
                        dataType: "string",
                        values: [ "normal", "bold", "bolder", "lighter" ],
                        default: "normal"
                    },
                    fontFamily: {
                        dataType: "string",
                        values: [ "Abadi MT Condensed Light", "Aharoni", "Aharoni Bold", "Aldhabi", "AlternateGothic2 BT", "Andale Mono", "Andalus", "Angsana New", "AngsanaUPC", "Aparajita", "Apple Chancery", "Arabic Typesetting", "Arial", "Arial Black", "Arial narrow", "Arial Nova", "Arial Rounded MT Bold", "Arnoldboecklin", "Avanta Garde", "Bahnschrift", "Bahnschrift Light", "Bahnschrift SemiBold", "Bahnschrift SemiLight", "Baskerville", "Batang", "BatangChe", "Big Caslon", "BIZ UDGothic", "BIZ UDMincho Medium", "Blippo", "Bodoni MT", "Book Antiqua", "Book Antiqua", "Bookman", "Bradley Hand", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Brush Script Std", "Brushstroke", "Calibri", "Calibri Light", "Calisto MT", "Cambodian", "Cambria", "Cambria Math", "Candara", "Century Gothic", "Chalkduster", "Cherokee", "Comic Sans", "Comic Sans MS", "Consolas", "Constantia", "Copperplate", "Copperplate Gothic Light", "Copperplate Gothic Bold", "Corbel", "Cordia New", "CordiaUPC", "Coronetscript", "Courier", "Courier New", "DaunPenh", "David", "DengXian", "DFKai-SB", "Didot", "DilleniaUPC", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Estrangelo Edessa", "EucrosiaUPC", "Euphemia", "FangSong", "Florence", "Franklin Gothic Medium", "FrankRuehl", "FreesiaUPC", "Futara", "Gabriola", "Gadugi", "Garamond", "Gautami", "Geneva", "Georgia", "Georgia Pro", "Gill Sans", "Gill Sans Nova", "Gisha", "Goudy Old Style", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Hebrew", "Hoefler Text", "HoloLens MDL2 Assets", "Impact", "Ink Free", "IrisUPC", "Iskoola Pota", "Japanese", "JasmineUPC", "Javanese Text", "Jazz LET", "KaiTi", "Kalinga", "Kartika", "Khmer UI", "KodchiangUPC", "Kokila", "Korean", "Lao", "Lao UI", "Latha", "Leelawadee", "Leelawadee UI", "Leelawadee UI Semilight", "Levenim MT", "LilyUPC", "Lucida Bright", "Lucida Console", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Lucidatypewriter", "Luminari", "Malgun Gothic", "Malgun Gothic Semilight", "Mangal", "Marker Felt", "Marlett", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft JhengHei UI", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Sans Serif", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft YaHei UI", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Miriam", "Monaco", "Mongolian Baiti", "MoolBoran", "MS Gothic", "MS Mincho", "MS PGothic", "MS PMincho", "MS UI Gothic", "MV Boli", "Myanmar Text", "Narkisim", "Neue Haas Grotesk Text Pro", "New Century Schoolbook", "News Gothic MT", "Nirmala UI", "No automatic language associations", "Noto", "NSimSun", "Nyala", "Oldtown", "Optima", "Palatino", "Palatino Linotype", "papyrus", "Parkavenue", "Perpetua", "Plantagenet Cherokee", "PMingLiU", "Raavi", "Rockwell", "Rockwell Extra Bold", "Rockwell Nova", "Rockwell Nova Cond", "Rockwell Nova Extra Bold", "Rod", "Sakkal Majalla", "Sanskrit Text", "Segoe MDL2 Assets", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Emoji", "Segoe UI Historic", "Segoe UI Symbol", "Shonar Bangla", "Shruti", "SimHei", "SimKai", "Simplified Arabic", "Simplified Chinese", "SimSun", "SimSun-ExtB", "Sitka", "Snell Roundhan", "Stencil Std", "Sylfaen", "Symbol", "Tahoma", "Thai", "Times New Roman", "Traditional Arabic", "Traditional Chinese", "Trattatello", "Trebuchet MS", "Tunga", "UD Digi Kyokasho", "UD Digi KyoKasho NK-R", "UD Digi KyoKasho NP-R", "UD Digi KyoKasho N-R", "Urdu Typesetting", "URW Chancery", "Utsaah", "Vani", "Verdana", "Verdana Pro", "Vijaya", "Vrinda", "Webdings", "Westminster", "Wingdings", "Yu Gothic", "Yu Gothic UI", "Yu Mincho", "Zapf Chancery" ],
                        default: "sans-serif"
                    },
                    fontSize: { dataType: "number", default: 18 },
                    lineHeight: { dataType: "number" },
                    width: { dataType: "number string" },
                    height: { dataType: "number string" },
                    textBorderColor: { dataType: "color", default: "transparent" },
                    textBorderWidth: { dataType: "number", default: 0 },
                    textShadowColor: { dataType: "color", default: "transparent" },
                    textShadowBlur: { dataType: "number", default: 0 },
                    textShadowOffsetX: { dataType: "number", default: 0 },
                    textShadowOffsetY: { dataType: "number", default: 0 },
                    rich: {
                        dataType: "object dict",
                        properties: {
                            style_name: { dataType: "string" },
                            color: { dataType: "color", default: "#fff" },
                            fontStyle: {
                                dataType: "string",
                                values: [ "normal", "italic", "oblique" ],
                                default: "normal"
                            },
                            fontWeight: {
                                dataType: "string",
                                values: [ "normal", "bold", "bolder", "lighter" ],
                                default: "normal"
                            },
                            fontFamily: {
                                dataType: "string",
                                values: [ "Abadi MT Condensed Light", "Aharoni", "Aharoni Bold", "Aldhabi", "AlternateGothic2 BT", "Andale Mono", "Andalus", "Angsana New", "AngsanaUPC", "Aparajita", "Apple Chancery", "Arabic Typesetting", "Arial", "Arial Black", "Arial narrow", "Arial Nova", "Arial Rounded MT Bold", "Arnoldboecklin", "Avanta Garde", "Bahnschrift", "Bahnschrift Light", "Bahnschrift SemiBold", "Bahnschrift SemiLight", "Baskerville", "Batang", "BatangChe", "Big Caslon", "BIZ UDGothic", "BIZ UDMincho Medium", "Blippo", "Bodoni MT", "Book Antiqua", "Book Antiqua", "Bookman", "Bradley Hand", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Brush Script Std", "Brushstroke", "Calibri", "Calibri Light", "Calisto MT", "Cambodian", "Cambria", "Cambria Math", "Candara", "Century Gothic", "Chalkduster", "Cherokee", "Comic Sans", "Comic Sans MS", "Consolas", "Constantia", "Copperplate", "Copperplate Gothic Light", "Copperplate Gothic Bold", "Corbel", "Cordia New", "CordiaUPC", "Coronetscript", "Courier", "Courier New", "DaunPenh", "David", "DengXian", "DFKai-SB", "Didot", "DilleniaUPC", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Estrangelo Edessa", "EucrosiaUPC", "Euphemia", "FangSong", "Florence", "Franklin Gothic Medium", "FrankRuehl", "FreesiaUPC", "Futara", "Gabriola", "Gadugi", "Garamond", "Gautami", "Geneva", "Georgia", "Georgia Pro", "Gill Sans", "Gill Sans Nova", "Gisha", "Goudy Old Style", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Hebrew", "Hoefler Text", "HoloLens MDL2 Assets", "Impact", "Ink Free", "IrisUPC", "Iskoola Pota", "Japanese", "JasmineUPC", "Javanese Text", "Jazz LET", "KaiTi", "Kalinga", "Kartika", "Khmer UI", "KodchiangUPC", "Kokila", "Korean", "Lao", "Lao UI", "Latha", "Leelawadee", "Leelawadee UI", "Leelawadee UI Semilight", "Levenim MT", "LilyUPC", "Lucida Bright", "Lucida Console", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Lucidatypewriter", "Luminari", "Malgun Gothic", "Malgun Gothic Semilight", "Mangal", "Marker Felt", "Marlett", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft JhengHei UI", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Sans Serif", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft YaHei UI", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Miriam", "Monaco", "Mongolian Baiti", "MoolBoran", "MS Gothic", "MS Mincho", "MS PGothic", "MS PMincho", "MS UI Gothic", "MV Boli", "Myanmar Text", "Narkisim", "Neue Haas Grotesk Text Pro", "New Century Schoolbook", "News Gothic MT", "Nirmala UI", "No automatic language associations", "Noto", "NSimSun", "Nyala", "Oldtown", "Optima", "Palatino", "Palatino Linotype", "papyrus", "Parkavenue", "Perpetua", "Plantagenet Cherokee", "PMingLiU", "Raavi", "Rockwell", "Rockwell Extra Bold", "Rockwell Nova", "Rockwell Nova Cond", "Rockwell Nova Extra Bold", "Rod", "Sakkal Majalla", "Sanskrit Text", "Segoe MDL2 Assets", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Emoji", "Segoe UI Historic", "Segoe UI Symbol", "Shonar Bangla", "Shruti", "SimHei", "SimKai", "Simplified Arabic", "Simplified Chinese", "SimSun", "SimSun-ExtB", "Sitka", "Snell Roundhan", "Stencil Std", "Sylfaen", "Symbol", "Tahoma", "Thai", "Times New Roman", "Traditional Arabic", "Traditional Chinese", "Trattatello", "Trebuchet MS", "Tunga", "UD Digi Kyokasho", "UD Digi KyoKasho NK-R", "UD Digi KyoKasho NP-R", "UD Digi KyoKasho N-R", "Urdu Typesetting", "URW Chancery", "Utsaah", "Vani", "Verdana", "Verdana Pro", "Vijaya", "Vrinda", "Webdings", "Westminster", "Wingdings", "Yu Gothic", "Yu Gothic UI", "Yu Mincho", "Zapf Chancery" ],
                                default: "sans-serif"
                            },
                            fontSize: { dataType: "number", default: 12 },
                            align: {
                                dataType: "string",
                                values: [ "auto", "left", "right", "center" ],
                                default: "auto"
                            },
                            verticalAlign: {
                                dataType: "string",
                                values: [ "auto", "top", "bottom", "middle" ],
                                default: "auto"
                            },
                            lineHeight: { dataType: "number" },
                            backgroundColor: { dataType: "color", default: "transparent" },
                            borderColor: { dataType: "color", default: "transparent" },
                            borderWidth: { dataType: "number", default: 0 },
                            borderRadius: { dataType: "number array", default: 0 },
                            padding: { dataType: "number array", default: 0 },
                            shadowColor: { dataType: "color", default: "transparent"  },
                            shadowBlur: { dataType: "number", default: 0 },
                            shadowOffsetX: { dataType: "number", default: 0 },
                            shadowOffsetY: { dataType: "number", default: 0 },
                            width: { dataType: "number string" },
                            height: { dataType: "number string" },
                            textBorderColor: { dataType: "color", default: "transparent" },
                            textBorderWidth: { dataType: "number", default: 0 },
                            textShadowColor: { dataType: "color", default: "transparent" },
                            textShadowBlur: { dataType: "number", default: 0 },
                            textShadowOffsetX: { dataType: "number", default: 0 },
                            textShadowOffsetY: { dataType: "number", default: 0 }
                        }
                    }
                } 
            },
            subtext: { dataType: "string", default: "" },
            sublink: { dataType: "string", default: "" },
            subtarget: {
                dataType: "string",
                values: [ "blank", "self" ],
                default: "blank"
            },
            subtextStyle: {
                dataType: "object",
                properties: {
                    color: { dataType: "color", default: "#aaa" },
                    fontStyle: {
                        dataType: "string",
                        values: [ "normal", "italic", "oblique" ],
                        default: "normal"
                    },
                    fontWeight: {
                        dataType: "string",
                        values: [ "normal", "bold", "bolder", "lighter" ],
                        default: "normal"
                    },
                    fontFamily: {
                        dataType: "string",
                        values: [ "Abadi MT Condensed Light", "Aharoni", "Aharoni Bold", "Aldhabi", "AlternateGothic2 BT", "Andale Mono", "Andalus", "Angsana New", "AngsanaUPC", "Aparajita", "Apple Chancery", "Arabic Typesetting", "Arial", "Arial Black", "Arial narrow", "Arial Nova", "Arial Rounded MT Bold", "Arnoldboecklin", "Avanta Garde", "Bahnschrift", "Bahnschrift Light", "Bahnschrift SemiBold", "Bahnschrift SemiLight", "Baskerville", "Batang", "BatangChe", "Big Caslon", "BIZ UDGothic", "BIZ UDMincho Medium", "Blippo", "Bodoni MT", "Book Antiqua", "Book Antiqua", "Bookman", "Bradley Hand", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Brush Script Std", "Brushstroke", "Calibri", "Calibri Light", "Calisto MT", "Cambodian", "Cambria", "Cambria Math", "Candara", "Century Gothic", "Chalkduster", "Cherokee", "Comic Sans", "Comic Sans MS", "Consolas", "Constantia", "Copperplate", "Copperplate Gothic Light", "Copperplate Gothic Bold", "Corbel", "Cordia New", "CordiaUPC", "Coronetscript", "Courier", "Courier New", "DaunPenh", "David", "DengXian", "DFKai-SB", "Didot", "DilleniaUPC", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Estrangelo Edessa", "EucrosiaUPC", "Euphemia", "FangSong", "Florence", "Franklin Gothic Medium", "FrankRuehl", "FreesiaUPC", "Futara", "Gabriola", "Gadugi", "Garamond", "Gautami", "Geneva", "Georgia", "Georgia Pro", "Gill Sans", "Gill Sans Nova", "Gisha", "Goudy Old Style", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Hebrew", "Hoefler Text", "HoloLens MDL2 Assets", "Impact", "Ink Free", "IrisUPC", "Iskoola Pota", "Japanese", "JasmineUPC", "Javanese Text", "Jazz LET", "KaiTi", "Kalinga", "Kartika", "Khmer UI", "KodchiangUPC", "Kokila", "Korean", "Lao", "Lao UI", "Latha", "Leelawadee", "Leelawadee UI", "Leelawadee UI Semilight", "Levenim MT", "LilyUPC", "Lucida Bright", "Lucida Console", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Lucidatypewriter", "Luminari", "Malgun Gothic", "Malgun Gothic Semilight", "Mangal", "Marker Felt", "Marlett", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft JhengHei UI", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Sans Serif", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft YaHei UI", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Miriam", "Monaco", "Mongolian Baiti", "MoolBoran", "MS Gothic", "MS Mincho", "MS PGothic", "MS PMincho", "MS UI Gothic", "MV Boli", "Myanmar Text", "Narkisim", "Neue Haas Grotesk Text Pro", "New Century Schoolbook", "News Gothic MT", "Nirmala UI", "No automatic language associations", "Noto", "NSimSun", "Nyala", "Oldtown", "Optima", "Palatino", "Palatino Linotype", "papyrus", "Parkavenue", "Perpetua", "Plantagenet Cherokee", "PMingLiU", "Raavi", "Rockwell", "Rockwell Extra Bold", "Rockwell Nova", "Rockwell Nova Cond", "Rockwell Nova Extra Bold", "Rod", "Sakkal Majalla", "Sanskrit Text", "Segoe MDL2 Assets", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Emoji", "Segoe UI Historic", "Segoe UI Symbol", "Shonar Bangla", "Shruti", "SimHei", "SimKai", "Simplified Arabic", "Simplified Chinese", "SimSun", "SimSun-ExtB", "Sitka", "Snell Roundhan", "Stencil Std", "Sylfaen", "Symbol", "Tahoma", "Thai", "Times New Roman", "Traditional Arabic", "Traditional Chinese", "Trattatello", "Trebuchet MS", "Tunga", "UD Digi Kyokasho", "UD Digi KyoKasho NK-R", "UD Digi KyoKasho NP-R", "UD Digi KyoKasho N-R", "Urdu Typesetting", "URW Chancery", "Utsaah", "Vani", "Verdana", "Verdana Pro", "Vijaya", "Vrinda", "Webdings", "Westminster", "Wingdings", "Yu Gothic", "Yu Gothic UI", "Yu Mincho", "Zapf Chancery" ],
                        default: "sans-serif"
                    },
                    fontSize: { dataType: "number", default: 12 },
                    align: { // Unique subtextStyle Property
                        dataType: "string",
                        values: [ "auto", "left", "right", "center" ],
                        default: "auto"
                    },
                    verticalAlign: { // Unique subtextStyle Property
                        dataType: "string",
                        values: [ "auto", "top", "bottom", "middle" ],
                        default: "auto"
                    },
                    lineHeight: { dataType: "number" },
                    width: { dataType: "number string" },
                    height: { dataType: "number string" },
                    textBorderColor: { dataType: "color", default: "transparent" },
                    textBorderWidth: { dataType: "number", default: 0 },
                    textShadowColor: { dataType: "color", default: "transparent" },
                    textShadowBlur: { dataType: "number", default: 0 },
                    textShadowOffsetX: { dataType: "number", default: 0 },
                    textShadowOffsetY: { dataType: "number", default: 0 },
                    rich: {
                        dataType: "object dict",
                        properties: {
                            style_name: { dataType: "string" },
                            color: { dataType: "color", default: "#fff" },
                            fontStyle: {
                                dataType: "string",
                                values: [ "normal", "italic", "oblique" ],
                                default: "normal"
                            },
                            fontWeight: {
                                dataType: "string",
                                values: [ "normal", "bold", "bolder", "lighter" ],
                                default: "normal"
                            },
                            fontFamily: {
                                dataType: "string",
                                values: [ "Abadi MT Condensed Light", "Aharoni", "Aharoni Bold", "Aldhabi", "AlternateGothic2 BT", "Andale Mono", "Andalus", "Angsana New", "AngsanaUPC", "Aparajita", "Apple Chancery", "Arabic Typesetting", "Arial", "Arial Black", "Arial narrow", "Arial Nova", "Arial Rounded MT Bold", "Arnoldboecklin", "Avanta Garde", "Bahnschrift", "Bahnschrift Light", "Bahnschrift SemiBold", "Bahnschrift SemiLight", "Baskerville", "Batang", "BatangChe", "Big Caslon", "BIZ UDGothic", "BIZ UDMincho Medium", "Blippo", "Bodoni MT", "Book Antiqua", "Book Antiqua", "Bookman", "Bradley Hand", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Brush Script Std", "Brushstroke", "Calibri", "Calibri Light", "Calisto MT", "Cambodian", "Cambria", "Cambria Math", "Candara", "Century Gothic", "Chalkduster", "Cherokee", "Comic Sans", "Comic Sans MS", "Consolas", "Constantia", "Copperplate", "Copperplate Gothic Light", "Copperplate Gothic Bold", "Corbel", "Cordia New", "CordiaUPC", "Coronetscript", "Courier", "Courier New", "DaunPenh", "David", "DengXian", "DFKai-SB", "Didot", "DilleniaUPC", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Estrangelo Edessa", "EucrosiaUPC", "Euphemia", "FangSong", "Florence", "Franklin Gothic Medium", "FrankRuehl", "FreesiaUPC", "Futara", "Gabriola", "Gadugi", "Garamond", "Gautami", "Geneva", "Georgia", "Georgia Pro", "Gill Sans", "Gill Sans Nova", "Gisha", "Goudy Old Style", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Hebrew", "Hoefler Text", "HoloLens MDL2 Assets", "Impact", "Ink Free", "IrisUPC", "Iskoola Pota", "Japanese", "JasmineUPC", "Javanese Text", "Jazz LET", "KaiTi", "Kalinga", "Kartika", "Khmer UI", "KodchiangUPC", "Kokila", "Korean", "Lao", "Lao UI", "Latha", "Leelawadee", "Leelawadee UI", "Leelawadee UI Semilight", "Levenim MT", "LilyUPC", "Lucida Bright", "Lucida Console", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Lucidatypewriter", "Luminari", "Malgun Gothic", "Malgun Gothic Semilight", "Mangal", "Marker Felt", "Marlett", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft JhengHei UI", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Sans Serif", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft YaHei UI", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Miriam", "Monaco", "Mongolian Baiti", "MoolBoran", "MS Gothic", "MS Mincho", "MS PGothic", "MS PMincho", "MS UI Gothic", "MV Boli", "Myanmar Text", "Narkisim", "Neue Haas Grotesk Text Pro", "New Century Schoolbook", "News Gothic MT", "Nirmala UI", "No automatic language associations", "Noto", "NSimSun", "Nyala", "Oldtown", "Optima", "Palatino", "Palatino Linotype", "papyrus", "Parkavenue", "Perpetua", "Plantagenet Cherokee", "PMingLiU", "Raavi", "Rockwell", "Rockwell Extra Bold", "Rockwell Nova", "Rockwell Nova Cond", "Rockwell Nova Extra Bold", "Rod", "Sakkal Majalla", "Sanskrit Text", "Segoe MDL2 Assets", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Emoji", "Segoe UI Historic", "Segoe UI Symbol", "Shonar Bangla", "Shruti", "SimHei", "SimKai", "Simplified Arabic", "Simplified Chinese", "SimSun", "SimSun-ExtB", "Sitka", "Snell Roundhan", "Stencil Std", "Sylfaen", "Symbol", "Tahoma", "Thai", "Times New Roman", "Traditional Arabic", "Traditional Chinese", "Trattatello", "Trebuchet MS", "Tunga", "UD Digi Kyokasho", "UD Digi KyoKasho NK-R", "UD Digi KyoKasho NP-R", "UD Digi KyoKasho N-R", "Urdu Typesetting", "URW Chancery", "Utsaah", "Vani", "Verdana", "Verdana Pro", "Vijaya", "Vrinda", "Webdings", "Westminster", "Wingdings", "Yu Gothic", "Yu Gothic UI", "Yu Mincho", "Zapf Chancery" ],
                                default: "sans-serif"
                            },
                            fontSize: { dataType: "number", default: 12 },
                            align: {
                                dataType: "string",
                                values: [ "auto", "left", "right", "center" ],
                                default: "auto"
                            },
                            verticalAlign: {
                                dataType: "string",
                                values: [ "auto", "top", "bottom", "middle" ],
                                default: "auto"
                            },
                            lineHeight: { dataType: "number" },
                            backgroundColor: { dataType: "color", default: "transparent" },
                            borderColor: { dataType: "color", default: "transparent" },
                            borderWidth: { dataType: "number", default: 0 },
                            borderRadius: { dataType: "number array", default: 0 },
                            padding: { dataType: "number array", default: 0 },
                            shadowColor: { dataType: "color", default: "transparent"  },
                            shadowBlur: { dataType: "number", default: 0 },
                            shadowOffsetX: { dataType: "number", default: 0 },
                            shadowOffsetY: { dataType: "number", default: 0 },
                            width: { dataType: "number string" },
                            height: { dataType: "number string" },
                            textBorderColor: { dataType: "color", default: "transparent" },
                            textBorderWidth: { dataType: "number", default: 0 },
                            textShadowColor: { dataType: "color", default: "transparent" },
                            textShadowBlur: { dataType: "number", default: 0 },
                            textShadowOffsetX: { dataType: "number", default: 0 },
                            textShadowOffsetY: { dataType: "number", default: 0 }
                        }
                    }
                }
            },
            textAlign: {
                dataType: "string",
                values: [ "auto", "left", "right", "center" ],
                default: "auto"
            },
            textVerticalAlign: {
                dataType: "string",
                values: [ "auto", "top", "bottom", "middle" ],
                default: "auto"
            },
            triggerEvent: { dataType: "bool", default: false },
            padding: { dataType: "number array", default: 5 },
            itemGap: { dataType: "number", default: 10 },
            zlevel: { dataType: "number", default: 0 },
            z: { dataType: "number", default: 2 },
            left: { dataType: "string number", default: "auto" },
            top: { dataType: "string number", default: "auto" },
            right: { dataType: "string number", default: "auto" },
            bottom: { dataType: "string number", default: "auto" },
            backgroundColor: { dataType: "color", default: "transparent" },
            borderColor: { dataType: "color", default: "#ccc" },
            borderWidth: { dataType: "number", default: 1 },
            borderRadius: { dataType: "number array", default: 0 },
            shadowBlur: { dataType: "number" },
            shadowColor: { dataType: "color" },
            shadowOffsetX: { dataType: "number", default: 0 },
            shadowOffsetY: { dataType: "number", default: 0 }
        }
    },
    // legend: {
    //     dataType: "object"
    // },
    // grid: {
    //     dataType: "object"
    // },
    // xAxis: {
    //     dataType: "object"
    // },
    // yAxis: {
    //     dataType: "object"
    // },
    // polar: {
    //     dataType: "object"
    // },
    // radiusAxis: {
    //     dataType: "object"
    // },
    // angleAxis: {
    //     dataType: "object"
    // },
    // radar: {
    //     dataType: "object"
    // },
    // dataZoom: {
    //     dataType: "list object"
    // },
    // visualMap: {
    //     dataType: "list object"
    // },
    // tooltip: {
    //     dataType: "object"
    // },
    // axisPointer: {
    //     dataType: "object"
    // },
    // toolbox: {
    //     dataType: "object"
    // },
    // brush: {
    //     dataType: "object"
    // },
    // geo: {
    //     dataType: "object"
    // },
    // parallel: {
    //     dataType: "object"
    // },
    // parallelAxis: {
    //     dataType: "object"
    // },
    // singleAxis: {
    //     dataType: "object"
    // },
    // timeline: {
    //     dataType: "object"
    // },
    // graphic: {
    //     dataType: "object"
    // },
    // calendar: {
    //     dataType: "object"
    // },
    // dataset: {
    //     dataType: "object"
    // },
    // aria: {
    //     dataType: "object"
    // },
    // series: {
    //     dataType: "list object"
    // },
    // color: {
    //     dataType: "list hexColor"
    // },
    // backgroundColor: {
    //     dataType: "color"
    // },
    // textStyle: {
    //     dataType: "object"
    // },
    // animation: {
    //     dataType: "bool"
    // },
    // animationThreshold: {
    //     dataType: "int"
    // },
    // animationDuration: {
    //     dataType: "int"
    // },
    // animationEasing: {
    //     dataType: "string"
    // },
    // animationDelay: {
    //     dataType: "int"
    // },
    // animationDurationUpdate: {
    //     dataType: "int"
    // },
    // animationEasingUpdate: {
    //     dataType: "string"
    // },
    // animationDelayUpdate: {
    //     dataType: "int"
    // },
    // blendMode: {
    //     dataType: "string"
    // },
    // useUTC: {
    //     dataType: "bool"
    // }
}