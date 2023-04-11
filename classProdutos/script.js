const Obj = [
            {
                nome: 'Tênis Oakley Casual',
                valor: 'R$ 200',
                img: 'public/tenisOakley.jpg',
                id:0,
                quantidade:0,
            },
            {
                nome: 'Tênis Adidas Casual',
                valor: 'R$ 250',
                img: 'public/tenisAdidasCasual.jpg',
                id:01,
                quantidade:0,
            },
            {
                nome: 'Tênis Puma Casual',
                valor: 'R$ 450',
                img: 'public/tenisPumaCasual.jpg',
                id:02,
                quantidade:0,
            },
            {
                nome: 'Tênis Asics',
                valor: 'R$ 300',
                img: 'public/tenisAsics.jpg',
                id:03,
                quantidade:0,
            },
            {
                nome: 'Tênis Adidas',
                valor: 'R$ 320',
                img: 'public/tenisAdidas.jpg',
                id:04,
                quantidade:0,
            },
            {
                nome: 'Tênis Nike',
                valor: 'R$ 280',
                img: 'public/tenisNike.jpg',
                id:05,
                quantidade:0,
            },
            {
                nome: 'Chuteira Adidas',
                valor: 'R$ 220',
                img: 'public/chuteiraAdidas.jpg',
                id:06,
                quantidade:0,
            },
            {
                nome: 'Chuteira Nike',
                valor: 'R$ 210',
                img: 'public/chuteiraNike.jpg',
                id:07,
                quantidade:0,
            },
            {
                nome: 'Chuteira Penalti',
                valor: 'R$ 180',
                img: 'public/chuteiraPenalti.jpg',
                id:08,
                quantidade:0
            },

        ]

            iniciarLoja = ()=>{
            let caixa = document.getElementById('produtos')
            Obj.map((val) =>{
                caixa.innerHTML+=`<div class="produto-single">
                <p>${val.nome}</p>  <p class="valor">${val.valor}</p> <img class="imgTenis" src="${val.img}"></img>
                <a key=${val.id}>Adicionar ao carrinho</a>
                </div>`;
            })

        }

iniciarLoja()


var linkMercadorias = document.getElementsByTagName('a')

    addCarrinho = () =>{
        console.log(Obj)
      let objSave = JSON.stringify(Obj)
      let localObj = localStorage.setItem('save',objSave)
      let showObj = localStorage.getItem('save')
      console.log(showObj)
}
//o link é um array, então há vários deles.
//Sendo assim precisamos dizer a cada um deles o que acontecerá quando clicar para adicionar ao carrinho
for(let i = 0; i < linkMercadorias.length; i++){
    linkMercadorias[i].addEventListener('click', function(){
        let key = this.getAttribute('key')
        Obj[key].quantidade++
        AttCarrinho()
        addCarrinho()

        return false;
    })
}

AttCarrinho = () =>{
    let createCar = document.getElementById('carrinho')
    Obj.map((val) =>{
        if(val.quantidade >0){
            // let jsObj =JSON.stringify(Obj)
            // console.log(jsObj)
       createCar.innerHTML += `
        <p class="textoCarrinho">Produto:${val.nome}. Quantidade: ${val.quantidade}</p>`
    }
    })
}

