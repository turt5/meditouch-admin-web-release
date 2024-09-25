'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7b5088027e9209563fb557eea0e73354",
".git/config": "50a96315aaa0f797730fa0123247d359",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "41a48b9fdb4ba582c6547d057e523a01",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "17a43e9c25ac71e12bb07b008c9839dd",
".git/logs/refs/heads/master": "17a43e9c25ac71e12bb07b008c9839dd",
".git/logs/refs/remotes/origin/master": "eefbf0b2a9e36a44e27a97851b0044bb",
".git/objects/05/083b8476d13c7e15dd7dfa0588bfc14aed88bb": "5bbf925c701b96e3f9b758ff8b2e93bb",
".git/objects/06/c48f1b1f4913822648690d98914f5e420bdbfe": "6e687c341dfe3d7a22153f0fbd0a6789",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0c/538f449bb653f3aa8983b440dc668fd390123d": "106983399d35c765f4456879ebec4a68",
".git/objects/0d/0319b838956ec3ffd13166e20a86ebd6db1815": "b00996605a7b694a58bbf4f928b78180",
".git/objects/0f/c572e50f0a57c69f7ee26be402a8d55b905c70": "540ebca897c88e910c292e284376a75d",
".git/objects/11/0a5fec986377bbb120151070bf5e45592396c4": "d1facf6488921190a0e0ee391d5f7f90",
".git/objects/14/bd283f54fbf050fae60b13b78cdd43314e32a0": "9035f80f4a25f186ab1fb14bba3afa8e",
".git/objects/17/3e392c4c002d0c12020fa79b81cccaeb46c111": "8752148a763e4ac6da16e8ec4fd4f647",
".git/objects/17/c879d84351d336733679ec07c3531d4da2c305": "ac483b74cbe3ed67440da7472e1a1221",
".git/objects/18/d7f579c8125167d2f8921ed95a8f36ec33e092": "e1baf857decc8919ac4eaec0141105fd",
".git/objects/1b/d0ffd21559398b845db84643f8cb8e3c09c368": "bc30743f2786e80d613718e9d8cbe25e",
".git/objects/1d/70b7f666452788bac8ea1e1235ab9ff7975372": "569ca5c4a657ea4c7e76dff37ab7d59c",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/22/35748c7b8f2be5456bc695d3d73f57fd077171": "7b5d933cd698e928a83b39f52505e297",
".git/objects/22/bc6121ce929c4de86fd4ffca43ce8d70e9a764": "a280a06cdb5daab2c004f1d1205888f3",
".git/objects/23/d7836e49ab2bbc1dfd0df0667ec3b35ac5af46": "21f0804974586e25b4b6dce40d1d6d0b",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/10be9c41e873c7523c448db15cfa7470092e79": "1437cec53ce9d0dfa4775231cf241ed1",
".git/objects/2d/7e9ce179b279d37787fd636350ed36c94e4612": "4b9256abad209443a1bfd5a6e4287dd9",
".git/objects/31/7626896b83d7dc5749a69863c109af3ea3f2c4": "f51826a5041555b7d8769e24039cc2f0",
".git/objects/33/de9ec397bb0507f67c62063b304ffbf7c9a446": "a47b7a60134f7ebcf8836a99c8886a60",
".git/objects/36/47f325308a30ea193381f4f05becc3d702a166": "273e86472dc70786a696f97199f72726",
".git/objects/38/1849c057344d13d65681452348ba841b528490": "49c531e97de42dc16581ba64f5af1342",
".git/objects/3b/e122d472d8eb3fed098550d0d9fed7489921f1": "2b0ff355be04bda9aafbc906d935a8c9",
".git/objects/3d/b14b126476d9c869131ef4704cad85923b8063": "cd8ef354928372758ca91180e917a189",
".git/objects/42/2c627d053bad1f47ae1a82b6f4fddcea4139b6": "6962373882fdc099e0848a601a628cf8",
".git/objects/43/b120835da8064d86c56d569f1b2ee3f1d569a6": "c25848dfe7556f651e336553eaedefe3",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/45/0fbe2ea340ea000e76d7057e25b64054fffca4": "6e53519067be82690f07e51e75b80445",
".git/objects/45/e90efa01f471478fff8025a9af33d56fa7022c": "868a9ad6065cc195ff78dcc39d35968f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/d508d12f3f771cdccbdc7d9000755bedf59859": "5b98ba28d8fc2d820b4e429c02aa27ca",
".git/objects/48/b376a63a9ebaffc103aeec60d78a85ca5e57ca": "e350d424ca17ed24cbd0e722717affeb",
".git/objects/4a/36154619e14d1f4c5ee210c15ef4e721fe8666": "8ad8164ca886cc3103fd7d8550820499",
".git/objects/56/221fc604529c857506e1d2d25a60f03cd8a5d0": "64149a556c2b277c228902b9dcf5b269",
".git/objects/5a/244486b299ae5ff968de1f3e5251807df3e879": "9fdbc577a8cf97cf6dba358e7b069611",
".git/objects/5c/57d36ec26ae3fa8ec34e43758bec14cfe5913d": "89b2d1ee28edb5ad79c2187b6bb7358a",
".git/objects/5c/c0310341d959809e87ad8929a04be9659755e6": "4ebadcc92bc5fa04725b55039163e59c",
".git/objects/63/bf3717140e84d0bd21a7bd9a75ad8f97ee0fbd": "2dacf96a9d58467e201751af3df0fe47",
".git/objects/64/46f09209f2a945b4f8ee308985d601cc72373a": "faa92f6f12a6bdcd8e12242a81a85510",
".git/objects/65/f2c365c12468c41ff50088a1372be7e05f96a2": "8c24255a6c4136e73bb25c362ced8d73",
".git/objects/6a/59235b544ae1ab06f0c08d4b9f28d224f598fc": "60258ec1d7a4bd068879032461620ffb",
".git/objects/6b/c273e8cf4f7823e544d36a572f57a8f6ad5438": "9e31c5d7a326bdf8c566850578124785",
".git/objects/6d/46173f64ac07df58845e8c147ff7f343f294c0": "22057674fa0a523fc0f48af32d7d324e",
".git/objects/6f/435f81f1d7d1d3a80aa4b502c1a88056c1dc34": "33b3eb1948fc9886383a60b24438846b",
".git/objects/72/039300c28db5d9c8ddd0f79d772e2152b9f37a": "2353f618281222216b94e55909955e47",
".git/objects/72/05338aad10b9bd4076080843656a8826879baf": "a80b13ba29230cccbf11d515bbf6838b",
".git/objects/72/391a81dfb4f1c1837b28a1a57536b2687ce28f": "7aeee6a145716c84d5b7dfac7fe27d30",
".git/objects/72/dabf84b18f89efbee2a8b98fff87a553a7c957": "ab9fdec90d31ec020a5c14673839970e",
".git/objects/75/f74557aef79a4b7805c0b390ff4358a76c6a75": "4d74c9ff1ad53df3fcc83546edb40b55",
".git/objects/76/a1ac9a7ab54f3a93540497e010a328791fd537": "d0b586b9a2d47c92dc94aab2933c903e",
".git/objects/7c/4bf5ae0970142e09a1c305083a2152038c078b": "02989e4d2a16f56b388f9890f49d76b3",
".git/objects/7c/5ef0d49f6f973c880974f4855d219635c21be4": "d3d2348d4dcaefc770710b6b4908133d",
".git/objects/7d/7652e3d13fa9ba46a4a8df95bf0ab02f8b094b": "52e69e314b6823c650b114f67b21f7ab",
".git/objects/7d/98d6a1e70b1daf92de470f387df030d58b4e3e": "cabedc71f42a36ffe3180dabc98534db",
".git/objects/7f/f83b79858fd04133eab45a9261856eb156770d": "ede789fa0aa8b17c82cbea6b01c07a63",
".git/objects/80/4d36f605240b5effb1347f3d2dd83dcd9b5ed0": "53cf9e52be444b1063db47eb28636b70",
".git/objects/81/abe9079ff82bc8b6f005e505595a4c951d2640": "b548e44df2b98cbe4f57269589e7354a",
".git/objects/82/ccd0cfe68940f4720863fd3addeabf14e623b9": "0f0d06b984c2801a6f7e5d75884bb528",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/a1435a0fcb68be4edf985863a5e837ef8bedab": "1ba2669abaf87fcb8a1b2d9bb8fedcc4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/8943688db0b5fe7c58447add8b2ab5ef1fd3a0": "6a31cb1ad647ba231f04b1718f3c4bd3",
".git/objects/8f/eff13e1980df38a88de7331bdcc1932c43dd28": "f36591943e2e5fe81e0771010dd4dc93",
".git/objects/92/96be64870804b9417956f0d5cf63b99a00e19e": "52aebd078cfbb8c0b412b718d7bb3fda",
".git/objects/92/9977ce6bc5938b37517bd8dfa91633a64a177a": "d03945fd0f945b933d5d54d8b9ceb87c",
".git/objects/95/1a26b4191db854d6a58ce0bafc58bf003ca291": "8de5d492275b46282b500cb0926e0ae0",
".git/objects/96/37a930033ca608639ece2578d8a9e622ffbf00": "6c5fc4c9c99f209be3d89391f2339272",
".git/objects/97/3ab61f63cc8ca32b904378bd5b52d104b8f99c": "463ac7a10a0f382306a9053278f7fd9b",
".git/objects/99/160c250b5c2d56c083aa3359d20581b7c33d7f": "8a115aa772282372a66864f7dbaf196f",
".git/objects/9a/28990b188d968a3af19fa53329f5d482142b08": "c92d1f701458c3dcbe4156f93d85b61b",
".git/objects/9c/0c78e80aec85c051b221e5d4337b48878ccdac": "e6be11c59e10d41ab7663488f29fa26d",
".git/objects/9d/000512562fbe310bfdae735e048047ddd346c9": "9ed1b05e4d53dc30391bf2c534aca7d3",
".git/objects/9d/2c0c68b12b7d83000dc9116c9b1fdd2dcc59c2": "a145e02f7ce25f11202b98b09f56d49d",
".git/objects/9f/3c67942767604b97375da80d8dca90f5aa4ef4": "6dcdd6faac2ee163cee698af63ca7409",
".git/objects/9f/f99fc81628c84a13a1df39ddc63a0ce6be7ae5": "0a395b4400201f9ba27b6b065b1a86b5",
".git/objects/a2/4048ec0d1e726664019187e2bd7784db430037": "05be2fc31f14a0682cff51fa462b37f5",
".git/objects/a3/fd298ca2d13030e92ae27c9685120fb8b2efda": "b214383f20f259b6bbe272af4bc07978",
".git/objects/a9/9dd9368422cca1aca266d373b9791a572b5635": "0efc8d155c57d892907d60fe0a267ee9",
".git/objects/ac/498e716fdf17e1e320b504452cbaa32896a658": "e1978d0d6452f4fa885a09623e0dc96c",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b6/a548fa556f8a8fbd4b38d660af8fb6dbaa51dc": "41158bdfa99998102592bf495fee528a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/fab83264eff7b2b154e93cb55904f3c5bfa5db": "715f0e82a06973d690a043c7df75ba3c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/e00b830be920b37bdefcd00db8b09fd25660e6": "d7ce61edfd831b2dab17d11c2ff68edb",
".git/objects/be/212d86a509456183fe22fd3004053332688ea3": "6fb441a3cad1aae586ae821735b35a93",
".git/objects/bf/1be9435b8757eff8ade25d1ea89c1f65e6a0c4": "97f41146c9886229fd3e80c32b8631d7",
".git/objects/c2/b8245f149adfc4e1511e64601b78c413a5c649": "2df0e253dad10e027af09d153b622d79",
".git/objects/c4/9d631719feca87e31e4f0348da4c932b93a2c6": "a379637bcaf4f2cf50469a0e5176188a",
".git/objects/c4/cf2f9b0e33f5e909691964d2ab7dbb5408f7d3": "cec055eab8f98c1699d2473fde461abb",
".git/objects/c8/48a04037b93cde3cf65f86cfb48bd9d6f630f2": "189fa7b5b6df4336b13d9a0611af175a",
".git/objects/ca/4c91209a3d194a3e71b2e101b50e49dd54fce8": "c3344b9121f56f6b1c2ccf0fe2512d7a",
".git/objects/ca/6f10502d0e0f054b63a2b06be044cbb92ac530": "466e7c20c6aa8a46502b2ff45af41ad2",
".git/objects/cb/3bbcaa99d78fb45af999b29fab3143892edbb4": "39ba61e8d4251ea77f3078b8c7607788",
".git/objects/cb/fcc5f205ccc0851c0f8645e2d267b9156448a5": "72527138caeae347721dd9a788e8f83f",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d1/bdba18341bd5062c6e4f2da2ba8b4c64850c09": "813b1f5cb0b1ba549760347a72167abd",
".git/objects/d1/c2dbced31407981f760e70b052f7688cb8dcb6": "59b83046934800175adfd4f4fbd33342",
".git/objects/d2/67557b2bd2b3ad4b93a8a0f79e04f0d5614bd4": "0cf008cb5ed73211806a661f416183fb",
".git/objects/d3/c4bf53f43ecc22e48509b635b9957091ad8369": "a2b7cd07d714daacbee81bd12a5e15f2",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/c909ff2889e2b57eb978f8f77718dfc9bb5e26": "65b82c50126c85d3257d28e8fc15a4ed",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/1204aaa381968b767df2fc8f7b87a4c94c583c": "97c17b6d620f1f9362780cc59d2545aa",
".git/objects/d9/8fbf660adbd1d2358a8bdd9a9bf04f46a55bb1": "5ddbbc2eafdb034ff5c43bfb31f24966",
".git/objects/df/9817a87c50d78be795d0981045bc05ad04159d": "b07b334a06655b89ddc420be3d65b96d",
".git/objects/e0/9377d402157da51ec0651180ab284ba2b2bd87": "63fae13724ac3f8b38ea95bd40ce7351",
".git/objects/e1/f89ad75752b0ed96deaa103bf2bd6416ace710": "e1dea987045c5a927610a22d9cc8580c",
".git/objects/e2/8b49c3c67e8af895e33811405ae5ea26441617": "aa82ef2a938313e18bad7970f3b27b13",
".git/objects/e3/a7eb898839df106192dfb89f3ad33fbe67106f": "27302b72601d307720c02c341f79b2e8",
".git/objects/e4/9e8ceb3c42e3662674e4c5274039687b4acd00": "7e4427ba3449afb95c4566126b31b69b",
".git/objects/e4/e84f1d9e92de4347782e6b82b65aa024c3f569": "4df21110a5a3b618b14479c0f6970abd",
".git/objects/e5/ab22b3f8790490b2a7047f6c0a1ae9b952769b": "cbd1630eec1c79caf8505606ae9f225d",
".git/objects/e6/5e15dfca5639b9d1989256b3f19f3ddd4578a5": "5e97d111f6653d0973a29386006ec944",
".git/objects/ea/fc0e1451c463f0d15777bc65f7b4e5f609a3c0": "42c02e6f454f3a58a777928f09581ec4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/21c8c88621600b8254ca03d9b20904c7f7cc91": "6a2172c75b8af0b8b280478dcc6740e0",
".git/objects/f1/b5641d1ad7722c450bb1489a69cbe983149e04": "3a231c6139d969239ce96aad85aeaaa1",
".git/objects/f1/dcdb3d6e6704be0786e3524fc33e3be948a254": "5f4f42dd298a0e20689a81bdea08cf70",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/b6fdbc113c100d6ee81fe1ae92a0f62057012f": "940b3bc7386882ba0504ee6ce1ea80b0",
".git/objects/f6/3a3c65e70edbf2f686fe9e16eb528128d23135": "9c546c5903cfd95bb030f665a3a46a11",
".git/objects/fa/b3213b1c3d199645d2dfc8d18c661e1242fa6f": "5b41cc701e87995d37fadc7f76693df8",
".git/objects/fc/eb0e36eecbf3ea5bc33cdd8ffd753593879178": "83a856c3db1af606498616a6d6650eb3",
".git/objects/ff/582a6d6d964e4b152685c754dd8a92ae9636de": "f5f8b48beba6b2e86c672ee5fbff1f06",
".git/refs/heads/master": "bd315d04762fc8c372d4f964fb9ccc72",
".git/refs/remotes/origin/master": "bd315d04762fc8c372d4f964fb9ccc72",
"assets/AssetManifest.bin": "e10cdbd70ce4ae3a9cc423b9d54e5d72",
"assets/AssetManifest.bin.json": "989deeccdc3c970c57df29713fcd8f7b",
"assets/AssetManifest.json": "11ef954f71cb65c361d33178f8f4d805",
"assets/assets/icons/ambulance-flaticon.png": "c91efbf9d634f2e7804b3cf1835e9ba4",
"assets/assets/icons/ambulance.png": "3062e4844db5c213da1ff8ddf56b5175",
"assets/assets/icons/back.png": "c26ff861277d2b52e7036624eb4ac48a",
"assets/assets/icons/bag.png": "543d7bedcaec94e707ff35c7987315a3",
"assets/assets/icons/doctor-flaticon.png": "3595b2a779b1713fedd2197ea7b2302f",
"assets/assets/icons/doctor.png": "a54c1eafca03fbbd4ff071b86c2abbc9",
"assets/assets/icons/facebook.png": "88185cfe8061f1be73da1d5ea3d2271d",
"assets/assets/icons/google-32.png": "8a8eed4045063f6f1d71228e59b2a4c2",
"assets/assets/icons/google.png": "566509b67b5ae59a6346bcfffdfa08a1",
"assets/assets/icons/home.png": "f7c7ddf97bc64ff1a310e72988676492",
"assets/assets/icons/icons8-cart-32.png": "4658d4dadb385551e8428016c3db3d23",
"assets/assets/icons/icons8-doctors-50.png": "7ccb43970592041ce9b8e809d68fc96e",
"assets/assets/icons/icons8-doctors-bag-32.png": "82773e36dde80a56fd503f060d1ae212",
"assets/assets/icons/icons8-home-32.png": "8a049ac805d9e9e7feaf9d811f35504e",
"assets/assets/icons/icons8-logout-32.png": "37fc5c2a66b80711f65716ea20462ead",
"assets/assets/icons/icons8-money-50.png": "21bb26decb14fdc0971b3128e8c2199c",
"assets/assets/icons/icons8-notification-32.png": "a306e4461a22ad4394e72e4f8c666295",
"assets/assets/icons/icons8-package-50.png": "9cf20fa87a9f2e8515be4ed72cc8c1a0",
"assets/assets/icons/icons8-schedule-32.png": "00a21dee76c16bbd69a3b958fbc39eec",
"assets/assets/icons/icons8-support-32.png": "c68dc8ccc94b5f40a4568b946a6ce4c9",
"assets/assets/icons/icons8-support-48.png": "8f1c7f3db9e9e3573e13db1a4cec5300",
"assets/assets/icons/icons8-twitter-100.png": "e95d439ed1ccff1653a37154a7827814",
"assets/assets/icons/icons8-users-50.png": "6291668700a166ce8297ead973226bbb",
"assets/assets/icons/icons8-x-100.png": "c40b490725ec39172ce298c8256f97a9",
"assets/assets/icons/location.png": "418f82fc3baa72f6de2fce203411304e",
"assets/assets/icons/mail.png": "faa3aef1c0aac348321390f9f97c331c",
"assets/assets/icons/medical-checkup.png": "73db3d1fc67547f5554d7b85b96c1fb8",
"assets/assets/icons/news-report.png": "6e4bfa4ac1fcd5b16799ba765fde72e0",
"assets/assets/icons/notification.png": "191adec2a582be71e5db131b748437a8",
"assets/assets/icons/nurse.png": "c5707145ac4d841dd33d7b96f03d1d14",
"assets/assets/icons/order.png": "7487014cf7bad1a21930f8c973906ef7",
"assets/assets/icons/package-48.png": "e3570e1aac267ff733fa115f510da801",
"assets/assets/icons/partners.png": "7706fdfacaf256d829ee667a7e36e041",
"assets/assets/icons/password.png": "8151c7baea7b6ed2f785a886a088f185",
"assets/assets/icons/pharmacy.png": "842c64fd317cf4567cc05a7adc00f109",
"assets/assets/icons/pharmacy2.png": "dee129609ab6cec025e24c4c24731765",
"assets/assets/icons/search.png": "fd4b1b104017fa07dcdad0b9c1618292",
"assets/assets/icons/search2.png": "e7ea29c682b72d22ed48699eee62e8c4",
"assets/assets/icons/settings.png": "48e633855173c84ba2fb822866def585",
"assets/assets/icons/user.png": "c8f8caaf91138b2bfb096f1efb94e093",
"assets/assets/images/app-icon-128.png": "012ecad38203036594f411bcbc325007",
"assets/assets/images/app-icon.png": "009a1c9fbfe3250501cc642643986a51",
"assets/assets/images/bkash.png": "2baa8bfbca1effbf93719ada50ca0eb4",
"assets/assets/images/bkash2.png": "bc3fa73d4d633677b5ca03aee9fede4f",
"assets/assets/images/doctor-demo.jpg": "8c1a0030a21d5ed2584fc42e613bdf2c",
"assets/assets/images/logo.png": "66bcde1453e074535565c3f6932bebcc",
"assets/assets/images/logo2.png": "54240373455d4b1bd92078c1d870a943",
"assets/assets/images/splash-bg.png": "30ef07425ca83074cdc4e151600bfb19",
"assets/assets/images/vector%2520illustration%2520(1).png": "996e563932879882deb461996cc042b1",
"assets/assets/images/vector%2520illustration%2520(2).png": "bdfcd5e4b3c488b15d1ac62567c7f6f3",
"assets/assets/images/vector%2520illustration.png": "e9c21e5e534fafab3428a6369fae3b26",
"assets/assets/lottie/2c8ca09b.json": "1f75353087473a53ed78060c5e251e4d",
"assets/assets/lottie/3c0bce86.json": "4db62b09e13ec5b3795c9e45fd290aa2",
"assets/assets/lottie/c651d888.json": "04b7aa2b597d788911435fcb29efce70",
"assets/assets/lottie/calender.json": "856a7945a0ad3ce7d463479cefde388a",
"assets/assets/lottie/calender2.json": "25cb3bf72fb6c3d351cf17458563146d",
"assets/assets/lottie/cart.json": "dfe8558f0f76a2fb2156774198c44707",
"assets/assets/lottie/empty-cart.json": "537db782ecdee4c496d80522ba00da8d",
"assets/assets/lottie/f6cc5648.json": "c7336127a7bfb1ad2f6749d4bbc1f2a8",
"assets/assets/lottie/fav.json": "2b2cdf654611d74da0e9f2c509281893",
"assets/assets/lottie/fb3a6a17.json": "9529994f4694b18d79c905d8ad389c72",
"assets/assets/lottie/home.json": "052c0ef9b4039311882f9e891e7196df",
"assets/assets/lottie/loading.json": "5e2a248a32ce2b3d1c1f61a17eee1cad",
"assets/assets/lottie/loading2.json": "df83b65e6cddbac8b1fdc3254c372965",
"assets/assets/lottie/payment-success.json": "b0af42656ea0337936befa943da0024f",
"assets/assets/lottie/profile.json": "25528495eb364d5d77289de41be21ae0",
"assets/assets/lottie/settings.json": "2ce28a5647e0b286da185a002e2b5c1e",
"assets/assets/lottie/warning.json": "99505bde58aa743327ae76942936b2ce",
"assets/assets/svg/00d34e8d.svg": "a020e198d630ed32440bbfeae9de2c1e",
"assets/assets/svg/2d7c0ad1.svg": "6975922986b597b7b93c32c6af0f7270",
"assets/assets/svg/ab5e821d.svg": "00fee101c3b673e28ffb68ec6a801abb",
"assets/assets/svg/checkup.svg": "af571367f06e5b1d86b7fa106b68cbae",
"assets/assets/svg/community.svg": "46928d99084ab1dfd5a9afa0ba794310",
"assets/assets/svg/emergency.svg": "f9e49716ea3af6da8c65976a9102686b",
"assets/assets/svg/empty-cart.svg": "0c085502d8ac1e6570a4a6e6392ed4a2",
"assets/assets/svg/male-doctor.svg": "6a452a3a5e65c56099016837b85fcdee",
"assets/assets/svg/medical-news.svg": "654d524fa3243909c18803bb491f9d6b",
"assets/assets/svg/menu.svg": "865ed0ffcdda65b6e7f959265669c987",
"assets/assets/svg/not-found.svg": "8df76a69b9777a04194da3595881da72",
"assets/assets/svg/notification.svg": "28126d68116af9add7ea7189de54c439",
"assets/assets/svg/nurse.svg": "5fe61ba59f8159d6d788ccc1d18f7e3c",
"assets/assets/svg/search.svg": "52bf955ebde745037aedcec4bbc89483",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0e6b016990cf441cfe619c31ae763c16",
"assets/NOTICES": "ff0da409be6567599de202f3ef8a41ae",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "8684bdff0ce7fdc17719f1dd6d8ffe09",
"canvaskit/canvaskit.wasm": "97a8c65cec78e18f7ecc3d0511abcce0",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "860ac584a1aa160b4e7a54fe47168517",
"canvaskit/chromium/canvaskit.wasm": "0eda69d6ac51d0966a891cab4ba3dde8",
"canvaskit/skwasm.js": "e95d3c5713624a52bf0509ccb24a6124",
"canvaskit/skwasm.js.symbols": "2a2df8895eb98e2ab2061693eccf460b",
"canvaskit/skwasm.wasm": "deff2113a54706a8f30ba30ed0d0e8c4",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "24f8a47c88b667798d099f4c00dcf1bc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c0cd730590f04a9473779ea850c04dcb",
"/": "c0cd730590f04a9473779ea850c04dcb",
"main.dart.js": "52b623dbf1c467ad91b9ccbca884b2f4",
"manifest.json": "232e31cba878ccb6de3bb513f90d6315",
"version.json": "d91074985265f7be46b2a1a21487e1ea",
"web.zip": "d18f687c5654231741c229196b636486"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
