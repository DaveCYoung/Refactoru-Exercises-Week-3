angular.module('exModule', []);
angular.module('exModule');
angular.module('exModule').controller('mainController',['$scope', function($scope){

    $scope.cols = [
        "Username",
        "Fullname",
        "Region",
        "Race",
        "Wins",
        "Losses"]

    $scope.displaydata = []

    $scope.datacounter = 0

   

    $scope.data= [
        [
            "ridiculus",
            "Acton Williamson",
            "Europe",
            "Zerg",
            40,
            234
        ],
        [
            "purus",
            "Felix Bennett",
            "Europe",
            "Zerg",
            152,
            380
        ],
        [
            "interdum",
            "Stacy Ferrell",
            "Korea",
            "Zerg",
            22,
            136
        ],
        [
            "Mauris",
            "Olivia Higgins",
            "Europe",
            "Terran",
            279,
            374
        ],
        [
            "odio",
            "Addison Scott",
            "Europe",
            "Zerg",
            62,
            249
        ],
        [
            "scelerisque",
            "Olivia Ruiz",
            "America",
            "Terran",
            283,
            24
        ],
        [
            "varius",
            "Ulla Boyer",
            "Korea",
            "Protoss",
            362,
            437
        ],
        [
            "nisi",
            "Giacomo Holden",
            "Korea",
            "Zerg",
            41,
            461
        ],
        [
            "tempus",
            "Palmer Barton",
            "Korea",
            "Terran",
            489,
            249
        ],
        [
            "Cras",
            "Quamar Benson",
            "Korea",
            "Protoss",
            451,
            27
        ],
        [
            "Aliquam",
            "Ali Robbins",
            "Europe",
            "Zerg",
            445,
            306
        ],
        [
            "non",
            "Alan Osborne",
            "Korea",
            "Terran",
            36,
            455
        ],
        [
            "neque",
            "Martena Sykes",
            "Europe",
            "Zerg",
            94,
            426
        ],
        [
            "Phasellus",
            "Lana Reed",
            "Europe",
            "Protoss",
            423,
            186
        ],
        [
            "mauris",
            "Gil Dyer",
            "Korea",
            "Zerg",
            87,
            290
        ],
        [
            "mi",
            "Basil Moses",
            "America",
            "Zerg",
            486,
            95
        ],
        [
            "nisl",
            "Cullen Hale",
            "Korea",
            "Terran",
            372,
            359
        ],
        [
            "sit",
            "Roary Martin",
            "Korea",
            "Protoss",
            406,
            111
        ],
        [
            "ullamcorper",
            "Faith Hart",
            "Korea",
            "Terran",
            45,
            135
        ],
        [
            "arcu",
            "Sacha Dodson",
            "Europe",
            "Terran",
            228,
            463
        ],
        [
            "erat",
            "Jada Noel",
            "Europe",
            "Zerg",
            196,
            243
        ],
        [
            "vulputate",
            "Rinah Foley",
            "Europe",
            "Terran",
            391,
            428
        ],
        [
            "Fusce",
            "Noble Washington",
            "Europe",
            "Terran",
            174,
            492
        ],
        [
            "malesuada",
            "Brynn Hopkins",
            "America",
            "Terran",
            162,
            66
        ],
        [
            "enim",
            "Garth Larsen",
            "Europe",
            "Zerg",
            219,
            417
        ],
        [
            "felis",
            "Zelda Mendez",
            "Europe",
            "Protoss",
            168,
            131
        ],
        [
            "neque",
            "Tad Mcmillan",
            "Europe",
            "Protoss",
            426,
            307
        ],
        [
            "turpis",
            "Jemima Walsh",
            "America",
            "Protoss",
            81,
            280
        ],
        [
            "dapibus",
            "Amery Zamora",
            "Europe",
            "Terran",
            449,
            8
        ],
        [
            "turpis",
            "Christopher Gonzalez",
            "Europe",
            "Protoss",
            165,
            72
        ],
        [
            "metus",
            "Samson Yates",
            "Europe",
            "Zerg",
            373,
            21
        ],
        [
            "facilisis",
            "Regan Cooper",
            "Korea",
            "Protoss",
            190,
            396
        ],
        [
            "luctus",
            "Claudia Orr",
            "Korea",
            "Terran",
            386,
            81
        ],
        [
            "nulla",
            "Remedios Keller",
            "America",
            "Zerg",
            470,
            271
        ],
        [
            "lobortis",
            "Derek Fischer",
            "America",
            "Zerg",
            11,
            126
        ],
        [
            "et",
            "Chaney Mitchell",
            "Europe",
            "Protoss",
            246,
            97
        ],
        [
            "nec",
            "Abraham Whitney",
            "America",
            "Terran",
            325,
            162
        ],
        [
            "felis",
            "Kennedy Ellis",
            "America",
            "Zerg",
            148,
            193
        ],
        [
            "ut",
            "Tarik Hendrix",
            "America",
            "Terran",
            192,
            459
        ],
        [
            "mi",
            "Nolan Hensley",
            "Europe",
            "Terran",
            158,
            87
        ],
        [
            "egestas",
            "Charity Schmidt",
            "Korea",
            "Zerg",
            54,
            129
        ],
        [
            "blandit",
            "Briar Macias",
            "Korea",
            "Terran",
            291,
            96
        ],
        [
            "mollis",
            "Lael Mayo",
            "Korea",
            "Zerg",
            202,
            113
        ],
        [
            "consectetuer",
            "Hasad Lloyd",
            "Korea",
            "Terran",
            100,
            51
        ],
        [
            "sodales",
            "Keith Craft",
            "Europe",
            "Protoss",
            319,
            281
        ],
        [
            "justo",
            "Elmo Carlson",
            "America",
            "Protoss",
            349,
            51
        ],
        [
            "ornare",
            "Donovan Kline",
            "Korea",
            "Protoss",
            211,
            12
        ],
        [
            "turpis",
            "Hiroko Daugherty",
            "Europe",
            "Protoss",
            178,
            74
        ],
        [
            "a",
            "Karen Rodriguez",
            "Europe",
            "Zerg",
            458,
            307
        ],
        [
            "Sed",
            "Ella French",
            "Europe",
            "Terran",
            424,
            423
        ],
        [
            "pharetra",
            "Duncan England",
            "Korea",
            "Terran",
            346,
            214
        ],
        [
            "Nam",
            "Camilla Rocha",
            "America",
            "Zerg",
            156,
            209
        ],
        [
            "primis",
            "Rosalyn George",
            "Europe",
            "Terran",
            174,
            292
        ],
        [
            "rhoncus",
            "Cassidy Holden",
            "Europe",
            "Protoss",
            313,
            73
        ],
        [
            "pede",
            "Leo Shaw",
            "Europe",
            "Protoss",
            85,
            472
        ],
        [
            "ligula",
            "Rowan Duke",
            "America",
            "Protoss",
            443,
            51
        ],
        [
            "Quisque",
            "Kermit Howard",
            "America",
            "Terran",
            433,
            253
        ],
        [
            "iaculis",
            "Cooper Callahan",
            "Korea",
            "Terran",
            353,
            15
        ],
        [
            "massa",
            "Wallace Cook",
            "Europe",
            "Zerg",
            219,
            280
        ],
        [
            "a",
            "Oliver House",
            "America",
            "Protoss",
            69,
            385
        ],
        [
            "orci",
            "Armand Mooney",
            "America",
            "Terran",
            244,
            55
        ],
        [
            "sed",
            "Blair Santana",
            "America",
            "Terran",
            137,
            123
        ],
        [
            "Etiam",
            "Azalia Odonnell",
            "Europe",
            "Terran",
            473,
            24
        ],
        [
            "eget",
            "Hamilton Coffey",
            "Europe",
            "Protoss",
            490,
            477
        ],
        [
            "Nunc",
            "Mia Hopper",
            "Korea",
            "Terran",
            262,
            135
        ],
        [
            "lobortis",
            "Carol Lott",
            "America",
            "Terran",
            18,
            298
        ],
        [
            "interdum",
            "Nerea Lopez",
            "Korea",
            "Protoss",
            385,
            173
        ],
        [
            "facilisis",
            "Samuel Gardner",
            "America",
            "Terran",
            386,
            40
        ],
        [
            "erat",
            "Lynn Mclaughlin",
            "Europe",
            "Protoss",
            34,
            294
        ],
        [
            "fringilla",
            "Lilah Meyers",
            "America",
            "Zerg",
            262,
            336
        ],
        [
            "Duis",
            "Nehru Horne",
            "Korea",
            "Zerg",
            247,
            11
        ],
        [
            "ultricies",
            "Faith Rosario",
            "America",
            "Zerg",
            160,
            314
        ],
        [
            "consectetuer",
            "Julie Pace",
            "Europe",
            "Protoss",
            359,
            417
        ],
        [
            "ridiculus",
            "Mercedes Graves",
            "Europe",
            "Zerg",
            374,
            86
        ],
        [
            "tortor",
            "Eliana Nguyen",
            "America",
            "Terran",
            221,
            330
        ],
        [
            "mauris",
            "Melanie Witt",
            "America",
            "Zerg",
            114,
            398
        ],
        [
            "dolor",
            "Illiana Lancaster",
            "America",
            "Zerg",
            73,
            358
        ],
        [
            "aliquam",
            "Rashad Irwin",
            "Europe",
            "Terran",
            318,
            290
        ],
        [
            "pharetra",
            "Griffin Atkinson",
            "America",
            "Protoss",
            137,
            168
        ],
        [
            "Suspendisse",
            "Paki Marks",
            "Korea",
            "Protoss",
            46,
            468
        ],
        [
            "adipiscing",
            "Amelia Bolton",
            "Korea",
            "Terran",
            115,
            283
        ],
        [
            "placerat",
            "Aubrey Cooper",
            "America",
            "Terran",
            191,
            37
        ],
        [
            "sem",
            "Sharon Goff",
            "Europe",
            "Zerg",
            274,
            292
        ],
        [
            "eget",
            "Robin Norris",
            "Europe",
            "Terran",
            209,
            385
        ],
        [
            "arcu",
            "Amery Abbott",
            "Korea",
            "Protoss",
            198,
            486
        ],
        [
            "ligula",
            "Harding Gould",
            "Korea",
            "Protoss",
            30,
            3
        ],
        [
            "tempus",
            "Maggie Macias",
            "Korea",
            "Terran",
            337,
            310
        ],
        [
            "molestie",
            "Daryl Barlow",
            "Europe",
            "Protoss",
            343,
            258
        ],
        [
            "enim",
            "Tana Tyler",
            "Europe",
            "Protoss",
            253,
            173
        ],
        [
            "Cras",
            "Nell Hebert",
            "America",
            "Protoss",
            416,
            107
        ],
        [
            "nisi",
            "Guinevere Swanson",
            "Europe",
            "Protoss",
            324,
            408
        ],
        [
            "justo",
            "Mikayla Kirk",
            "America",
            "Terran",
            424,
            28
        ],
        [
            "purus",
            "Drew Marks",
            "America",
            "Zerg",
            275,
            117
        ],
        [
            "mi",
            "Pascale Bernard",
            "Korea",
            "Terran",
            237,
            29
        ],
        [
            "eu",
            "Myra Parsons",
            "America",
            "Zerg",
            399,
            77
        ],
        [
            "nulla",
            "Katelyn Acevedo",
            "America",
            "Protoss",
            449,
            95
        ],
        [
            "vel",
            "Melyssa Price",
            "Korea",
            "Terran",
            239,
            391
        ],
        [
            "diam",
            "Hanna Duke",
            "Europe",
            "Protoss",
            134,
            464
        ],
        [
            "ultrices",
            "Madeson Pickett",
            "Europe",
            "Zerg",
            90,
            392
        ],
        [
            "commodo",
            "Kibo Oliver",
            "Korea",
            "Terran",
            18,
            407
        ]
    ]

    $scope.datapush = function(){
    for (i=0;i<20;i++){
    $scope.displaydata.push($scope.data[i])
    $scope.datacounter++
        }
    }

    $scope.datapush()

     $scope.oneclick = function(){
    $scope.displaydata=[]
    for (i=0;i<20;i++){
    $scope.displaydata.push($scope.data[i])
    $scope.datacounter=i
        }
    }

    $scope.twoclick = function(){
   $scope.displaydata=[]
    for (i=19;i<40;i++){
    $scope.displaydata.push($scope.data[i])
    $scope.datacounter=i
        }
    }
    $scope.threeclick = function(){
    $scope.displaydata=[]
    for (i=39;i<60;i++){
    $scope.displaydata.push($scope.data[i])
    $scope.datacounter=i
        }
    }
    $scope.fourclick = function(){
    $scope.displaydata=[]
    for (i=59;i<80;i++){
    $scope.displaydata.push($scope.data[i])
    $scope.datacounter=i
        }
    }
    $scope.fiveclick = function(){
    $scope.displaydata=[]
    for (i=79;i<100;i++){
    $scope.displaydata.push($scope.data[i])
    $scope.datacounter=i
        }
    }
    $scope.nextclick = function(){
    $scope.displaydata=[]
    $scope.counter = $scope.datacounter   
    for (i=$scope.counter;i<($scope.counter+21);i++){
    $scope.displaydata.push($scope.data[i])
    $scope.datacounter = i
        }
    }
     $scope.lastclick = function(){
    $scope.displaydata=[]
    for (i=$scope.data.length;i>$scope.data.length-21;i--){
    $scope.displaydata.push($scope.data[i])
    $scope.datacounter= $scope.data.length-20;
        }
    }
    $scope.prevclick = function(){
    $scope.displaydata=[]
    $scope.counter = $scope.datacounter   
    console.log($scope.counter)
    for (i=$scope.counter;i>($scope.counter-21);i--){
    if(i>=0){
        $scope.displaydata.push($scope.data[i])
    }
        }
    }


    $scope.sortusername = function(){
        $scope.data.sort(function (a, b) {
            if (a[0] > b[0]) {
             return 1;
            }
            if (a[0] < b[0]) {
              return -1;
            }
            return 0;
    })
    $scope.displaydata=[]
    $scope.datapush()
    }

    $scope.sortfullname = function(){
        $scope.data.sort(function (a, b) {
            if (a[1] > b[1]) {
             return 1;
            }
            if (a[1] < b[1]) {
              return -1;
            }
            return 0;
    })
    $scope.displaydata=[]
    $scope.datapush()
    }
    $scope.sortregion = function(){
        $scope.data.sort(function (a, b) {
            if (a[2] > b[2]) {
             return 1;
            }
            if (a[2] < b[2]) {
              return -1;
            }
            return 0;
    })
    $scope.displaydata=[]
    $scope.datapush()
    }
    $scope.sortrace = function(){
        $scope.data.sort(function (a, b) {
            if (a[3] > b[3]) {
             return 1;
            }
            if (a[3] < b[3]) {
              return -1;
            }
            return 0;
    })
    $scope.displaydata=[]
    $scope.datapush()
    }
    $scope.sortwins = function(){
        $scope.data.sort(function (a, b) {
            if (a[4] < b[4]) {
             return 1;
            }
            if (a[4] > b[4]) {
              return -1;
            }
            return 0;
    })
    $scope.displaydata=[]
    $scope.datapush()
    }


// var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// => [2, 4, 6]

$scope.filterusernamemodel = ''
$scope.filterusername = function(){
$scope.displaydata = _.filter($scope.data, function(x){
    console.log($scope.filterusernamemodel)
    y = x[0].toLowerCase()
    z = $scope.filterusernamemodel.toLowerCase()
    console.log(y)
    for(i = 0; i<y.length; i++){
       
        return (y.slice(i, (i+(z.length))) === z)
    }

})
}

$scope.filterfullnamemodel = ''
$scope.filterfullname = function(){
$scope.displaydata = _.filter($scope.data, function(x){
    console.log($scope.filterfullnamemodel)
    y = x[1].toLowerCase()
    z = $scope.filterfullnamemodel.toLowerCase()
    console.log(y)
    for(i = 0; i<y.length; i++){
       
        return (y.slice(i, (i+(z.length))) === z)
    }

})
}

$scope.filterregionmodel = ''
$scope.filterregion = function(){
$scope.displaydata = _.filter($scope.data, function(x){
    console.log($scope.filterregionmodel)
    y = x[2].toLowerCase()
    z = $scope.filterregionmodel.toLowerCase()
    console.log(y)
    for(i = 0; i<y.length; i++){
       
        return (y.slice(i, (i+(z.length))) === z)
    }

})
}
$scope.filterracemodel = ''
$scope.filterrace = function(){
$scope.displaydata = _.filter($scope.data, function(x){
    console.log($scope.filterracemodel)
    y = x[3].toLowerCase()
    z = $scope.filterracemodel.toLowerCase()
    console.log(y)
    for(i = 0; i<y.length; i++){
       
        return (y.slice(i, (i+(z.length))) === z)
    }

})
}


}])