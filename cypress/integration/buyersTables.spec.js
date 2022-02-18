import validateScheduleDayDays from '../actions/validateSchedule';

describe('Validar movimentação dos buyers durante evento',function(){
    
    var validation = new validateScheduleDayDays;

    it('Verificar se há reuniões repetidas para Anne Connally - mesa 1', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/99f59c0842e83c808dd1813b48a37c6a/simple')
        // validation.validateScheduleDayDaysFirstDay();
        // validation.validateScheduleDayDaysSecondDay();
        // validation.validateScheduleDayDaysThirdDay();
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })


    it('Verificar se há reuniões repetidas para Angela Burns - mesa 1', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/7b66b4fd401a271a1c7224027ce111bc/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })

    it('Verificar se há reuniões repetidas para Caroline Wallace - mesa 2', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/565030e1fce4e481f9823a7de3b8a047/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Samantha McClure - mesa 2', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/347665597cbfaef834886adbb848011f/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })

    it('Verificar se há reuniões repetidas para Dani Johnson - mesa 3', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/b3f61131b6eceeb2b14835fa648a48ff/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })

    it('Verificar se há reuniões repetidas para Dean Horvath - mesa 4', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/cb2c2041d9763d84d7d655e81178f444/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })

    it('Verificar se há reuniões repetidas para Emily Prentiss - mesa 5', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/b1301141feffabac455e1f90a7de2054/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })

    it('Verificar se há reuniões repetidas para Ann Harrison - mesa 5', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/ea159dc9788ffac311592613b7f71fbb/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })

    it('Verificar se há reuniões repetidas para Jason Miller - mesa 6', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/cf05968255451bdefe3c5bc64d550517/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Jennifer Ruk - mesa 7', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/1843e35d41ccf6e63273495ba42df3c1/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Nancy Strong - mesa 7', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/e9412ee564384b987d086df32d4ce6b7/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Jenny Westermann - mesa 8', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/70c445ee64b1ed0583367a12a79a9ef2/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Steve Westermann - mesa 8', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/7884a9652e94555c70f96b6be63be216/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Karen Schragle - mesa 9', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/f7696a9b362ac5a51c3dc8f098b73923/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Bonty Escallon - mesa 9', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/102f0bb6efb3a6128a3c750dd16729be/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Keith Waldon - mesa 10', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/30aaf34d6afd4b11cc3b3ac4704c7908/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Evelyn Christensen - mesa 10', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/fc79250f8c5b804390e8da280b4cf06e/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Kyle Seltzer - mesa 11', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/4e0223a87610176ef0d24ef6d2dcde3a/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Lance Stamps - mesa 12', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/84b20b1f5a0d103f5710bb67a043cd78/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Richard Beck - mesa 12', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/f55cadb97eaff2ba1980e001b0bd9842/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Melissa De Vita - mesa 13', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/cc0991344c3d760ae42259064406bae1/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Kathy Moran - mesa 13', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/8c1b6fa97c4288a4514365198566c6fa/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Minette Scheffers - mesa 14', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/2f4fe03d77724a7217006e5d16728874/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Marcia Hellman - mesa 14', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/9657c1fffd38824e5ab0472e022e577e/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Monique Thofte - mesa 15', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/8c9f32e03aeb2e3000825c8c875c4edd/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Marybeth Hillier - mesa 15', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/be1df9a5d08724971f64a511e24fc904/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Pierre-Alexandre Francin - mesa 16', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/0bf727e907c5fc9d5356f11e4c45d613/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Rob Karp - mesa 17', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/2c6ae45a3e88aee548c0714fad7f8269/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Michael Lerner - mesa 17', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/6048ff4e8cb07aa60b6777b6f7384d52/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Rudi Steele - mesa 18', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/6a4cbdaedcbda0fa8ddc7ea32073c475/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Tomás Perez - mesa 18', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/8c59fd6fbe0e9793ec2b27971221cace/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Cindy Turner - mesa 19', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/97416ac0f58056947e2eb5d5d253d4f2/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Zach Cohen - mesa 19', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/234833147b97bb6aed53a8f4f1c7a7d8/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Jill Fischbarg - mesa 20', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/d9ff90f4000eacd3a6c9cb27f78994cf/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Erina Pindar - mesa 21', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/3cf2559725a9fdfa602ec8c887440f32/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Michael Holtz - mesa 21', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/b21f9f98829dea9a48fd8aaddc1f159d/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Joanna Kuflik - mesa 22', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/6b5754d737784b51ec5075c0dc437bf0/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Limor Decter - mesa 23', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/415e1af7ea95f89f4e375162b21ae38c/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Martin Rapp - mesa 24', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/217c0e01c1828e7279051f1b6675745d/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Diane Koones - mesa 24', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/7993e11204b215b27694b6f139e34ce8/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Renee Falack - mesa 25', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/b06b5541a62ed438f956b662b4e1ec28/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Jesse Katz - mesa 26', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/7b41bfa5085806dfa24b8c9de0ce567f/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Bella Enikeeva - mesa 27', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/063e26c670d07bb7c4d30e6fc69fe056/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Hillary Venti - mesa 27', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/7a68443f5c80d181c42967cd71612af1/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Ellen Hyman - mesa 28', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/1fb2a1c37b18aa4611c3949d6148d0f8/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para David Lloyd - mesa 28', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/186fb23a33995d91ce3c2212189178c8/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Didi Johnson - mesa 29', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/e139c454239bfde741e893edb46a06cc/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Spencer Jones - mesa 30', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/cd10c7f376188a4a2ca3e8fea2c03aeb/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Molly Kinnaird - mesa 31', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/61d77652c97ef636343742fc3dcf3ba9/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Tim Krenzien - mesa 32', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/c5dc3e08849bec07e33ca353de62ea04/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it("Verificar se há reuniões repetidas para Suzanne O'Brien - mesa 32", function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/f8b932c70d0b2e6bf071729a4fa68dfc/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Shahla Lalani - mesa 33', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/c30fb4dc55d801fc7473840b5b161dfa/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Jill Knox - mesa 33', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/fec87a37cdeec1c6ecf8181c0aa2d3bf/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Nadiya Makarenko - mesa 34', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/7e05d6f828574fbc975a896b25bb011e/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Amy Siegal - mesa 34', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/269d837afada308dd4aeab28ca2d57e4/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Lisa Sahney - mesa 35', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/6be93f7a96fed60c477d30ae1de032fd/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Diana Adamson Arias - mesa 35', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/020bf2c45e7bb322f89a226bd2c5d41b/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Djurdja Vidovic - mesa 36', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/af5d5ef24881f3c3049a7b9bfe74d58b/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Alisa Cohen - mesa 36', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/6ee69d3769e832ec77c9584e0b7ba112/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Francesc Escanez - mesa 37', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/c8067ad1937f728f51288b3eb986afaa/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Ayse Boykin - mesa 37', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/8b4224068a41c5d37f5e2d54f3995089/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Beth Wolfe - mesa 38', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/999600eb275cc7196161261972daa59b/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Mishelle Ying - mesa 39', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/07a9d3fed4c5ea6b17e80258dee231fa/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Camille Cutrone Holubar - mesa 40', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/b090409688550f3cc93f4ed88ec6cafb/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Martin Zingor - mesa 40', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/82ca5dd156cc926b2992f73c2896f761/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Emily Lockard-Furry - mesa 41', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/cbf8710b43df3f2c1553e649403426df/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Nataliya Vasilyeva - mesa 41', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/10c66082c124f8afe3df4886f5e516e0/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Jamie Guillen - mesa 42', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/28b60a16b55fd531047c0c958ce14b95/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Miriam Guillen - mesa 42', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/4be5a36cbaca8ab9d2066debfe4e65c1/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Jill Hamilton - mesa 43', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/5e6bd7a6970cd4325e587f02667f7f73/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Meg Nolan - mesa 43', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/4a06d868d044c50af0cf9bc82d2fc19f/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Mark Hoyer - mesa 44', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/0747b9be4f90056c30eb5241f06bfe9b/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Lynn Tyger - mesa 44', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/7827d1ec626c891d4b61a15c9dff296e/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Morgan Diolot - mesa 45', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/03e7ef47cee6fa4ae7567394b99912b7/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Silvia Gardin - mesa 45', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/9af76329c78e28c977ab1bcd1c3fe9b8/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Samantha Collum - mesa 46', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/7989edad14ebcd3adfacc7344dc6b739/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para James Sorensen - mesa 46', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/49d4b2faeb4b7b9e745775793141e2b2/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Stephanie Rizzolo - mesa 47', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/3f998e713a6e02287c374fd26835d87e/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Patty Ehinger - mesa 47', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/7cc234202e98d2722580858573fd0817/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Becky Lukovic - mesa 48', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/d04863f100d59b3eb688a11f95b0ae60/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Sara Ryan Duffy - mesa 48', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/46515dcd99ea50dd0671bc6840830404/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Denise Hall - mesa 49', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/5dec707028b05bcbd3a1db5640f842c5/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Patricia McLemore - mesa 49', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/e82c4b19b8151ddc25d4d93baf7b908f/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Jessica Scott - mesa 50', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/57bafb2c2dfeefba931bb03a835b1fa9/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Heather Keller - mesa 50', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/6547884cea64550284728eb26b0947ef/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Joseph Colucci - mesa 51', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/33bb83720ba9d2b6da87114380314af5/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Wendy Taylor - mesa 51', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/31c97cbb941d3e92d0e6f9925e9bc4d7/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Lauren LaCour - mesa 52', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/b06f50d1f89bd8b2a0fb771c1a69c2b0/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Mike Arnold - mesa 52', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/5314b9674c86e3f9d1ba25ef9bb32895/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Lisa Daumann - mesa 53', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/9407c826d8e3c07ad37cb2d13d1cb641/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Susanne Hamer - mesa 53', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/8db9264228dc48fbf47535e888c02ae0/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Loreal Shea - mesa 54', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/55a988dfb00a914717b3000a3374694c/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Pascal Resta - mesa 55', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/250413d2982f1f83aa62a3a323cd2a87/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Rebecca Bullen - mesa 56', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/53f0d7c537d99b3824f0f99d62ea2428/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Wendy Davis - mesa 57', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/a6d259bfbfa2062843ef543e21d7ec8e/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Brendan Considine - mesa 58', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/86ecfcbc1e9f1ae5ee2d71910877da36/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Minerva Padilla - mesa 59', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/7fd804295ef7f6a2822bf4c61f9dc4a8/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Michele Benigno - mesa 59', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/feecee9f1643651799ede2740927317a/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Christina Turrini - mesa 60', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/8208974663db80265e9bfe7b222dcb18/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Andrea Kucharova - mesa 60', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/add217938e07bb1fd8796e0315b88c10/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Nadezda Novakova - mesa 61', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/b427426b8acd2c2e53827970f2c2f526/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Lisa Baserga - mesa 61', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/070dbb6024b5ef93784428afc71f2146/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Alysia Hopper Steffes - mesa 62', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/9d28de8ff9bb6a3fa41fddfdc28f3bc1/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Anna Plebanek - mesa 63', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/1a68e5f4ade56ed1d4bf273e55510750/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Kate Corey - mesa 63', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/4a1590df1d5968d41b855005bb8b67bf/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Cheri Rice - mesa 64', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/03cf87174debaccd689c90c34577b82f/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Cheri Forzani - mesa 64', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/bc7f621451b4f5df308a8e098112185d/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Danielle Pearson - mesa 65', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/a6ea8471c120fe8cc35a2954c9b9c595/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Ann Gerakitis - mesa 65', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/ee8fe9093fbbb687bef15a38facc44d2/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Deya Palmero - mesa 66', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/ac1ad983e08ad3304a97e147f522747e/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Peter Huber - mesa 66', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/85353d3b2f39b9c9b5ee3576578c04b7/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Emily Pariseau - mesa 67', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/f708f064faaf32a43e4d3c784e6af9ea/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Mona Khalil - mesa 67', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/2dbf21633f03afcf882eaf10e4b5caca/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Heather Bannon - mesa 68', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/2aaaddf27344ee54058548dc081c6541/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Rosamund King - mesa 68', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/ea4eb49329550caaa1d2044105223721/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Inga Bytaute - mesa 69', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/24e27b869b66e9e62724bd7725d5d9c1/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Cydney Lembersky - mesa 69', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/7cac11e2f46ed46c339ec3d569853759/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Natasha Phillips - mesa 70', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/1e0a84051e6a4a7381473328f43c4884/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Anne Liles - mesa 70', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/92a0e7a415d64ebafcb16a8ca817cde4/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Melissa Martin - mesa 71', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/d16509f6eaca1022bd8f28d6bc582cae/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Sarah Nichols - mesa 72', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/8a20a8621978632d76c43dfd28b67767/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Maria Poole - mesa 72', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/e92d74ccacdc984afa0c517ad0d557a6/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Susan Boehnstedt - mesa 73', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/87682805257e619d49b8e0dfdc14affa/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Georgia Schley Ritchie - mesa 73', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/72e6d3238361fe70f22fb0ac624a7072/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Joelle Marciano - mesa 74', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/bb03e43ffe34eeb242a2ee4a4f125e56/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Jill Robbins - mesa 74', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/1f34004ebcb05f9acda6016d5cc52d5e/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Valentins Ivanovs - mesa 75', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/4a8423d5e91fda00bb7e46540e2b0cf1/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Aja Chmeliauskaite - mesa 76', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/4c5bcfec8584af0d967f1ab10179ca4b/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Madeline Steuber - mesa 76', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/f7ac67a9aa8d255282de7d11391e1b69/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Alexandra Erdman Ely - mesa 77', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/8cbd005a556ccd4211ce43f309bc0eac/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Nancy Novogrod - mesa 77', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/8bdb5058376143fa358981954e7626b8/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Deborah Gellis - mesa 78', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/e3ca0449fa2ea7701a7ac53fb719c51a/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Angela Adto Tepper - mesa 78', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/da4902cb0bc38210839714ebdcf0efc3/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para John Beeler - mesa 79', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/3430095c577593aad3c39c701712bcfe/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Ragan Stone - mesa 79', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/921c2dc40d0b979c2910298d2f880152/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Martha Gaughen - mesa 80', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/4de754248c196c85ee4fbdcee89179bd/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Bowden Sarrett - mesa 80', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/a554f89dd61cabd2ff833d3468e2008a/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Linda Considine - mesa 81', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/6ef80bb237adf4b6f77d0700e1255907/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Roberta Long-Kelleher - mesa 82', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/b4baaff0e2f11b5356193849021d641f/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Kate Little-Paradiso - mesa 83', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/e71e5cd119bbc5797164fb0cd7fd94a4/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Christie Holmes - mesa 84', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/bd7db7397f7d83052f829816ecc7f004/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Elissa Goldman - mesa 85', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/a9365bd906e11324065c35be476beb0c/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Lisa Fishman - mesa 86', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/ba3e9b6a519cfddc560b5d53210df1bd/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Donna Guttman - mesa 87', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/f83630579d055dc5843ae693e7cdafe0/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Fiona Forward - mesa 88', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/4dd9cec1c21bc54eecb53786a2c5fa09/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Federico von Sanden - mesa 89', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/d0921d442ee91b896ad95059d13df618/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Adamarie King - mesa 90', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/ca43108ded5aabc7793d3f9b928cdd54/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Kathy Lubrano - mesa 91 ', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/0e4a2c65bdaddd66a53422d93daebe68/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Tania Parisse - mesa 92', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/831caa1b600f852b7844499430ecac17/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Stéphanie Deschamps - mesa 92', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/696b35cc35e710279b9c2dedc08e22d7/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Mallory Shaw - mesa 93', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/1bf0c59238dd24a7f09a889483a50e8f/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Brie Shelly - mesa 94', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/52cf49fea5ff66588408852f65cf8272/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Adriana Sladovnikova - mesa 95', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/0a65e195cb51418279b6fa8d96847a60/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Mary Steadman - mesa 96', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/db60b95decdeed944b4cd8685417cfdc/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Rachelle Stepner - mesa 97', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/4c8c76b39d294759a9000cbda3a6571a/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Mariana Tosic - mesa 98', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/2aedcba61ca55ceb62d785c6b7f10a83/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Danny Akhtar - mesa 99', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/ddeebdeefdb7e7e7a697e1c3e3d8ef54/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Juliana Angotti - mesa 100', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/d9fc0cdb67638d50f411432d0d41d0ba/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Linda Sergeant - mesa 101', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/dcf6070a4ab7f3afbfd2809173e0824b/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
    it('Verificar se há reuniões repetidas para Ana Bru - mesa 101', function(){
        cy.visit('https://duco.dev.luby.com.br/italy-2021-physical/buyer/schedule/social-distancing/3837a451cd0abc5ce4069304c5442c87/simple')
        validation.validateScheduleDayDay();
        validation.validateHotelJump();
    })
})