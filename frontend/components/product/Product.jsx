const Product = () => {

    const [product, setProduct] = React.useState([]);
    const [render] = React.useState(false);
    const [category, setCategory] = React.useState("todas");

    React.useEffect(async () => {
        const url = "http://localhost/Full_Stack_Eletro_React/backend/";
        const response = await fetch(url);
        setProduct(await response.json());
    }, [render]);

    function filter(category) {
        setCategory(category)
    }

    return (
        <main>
            <div className="container-fluid">
                <h1 className="my-2">Produtos</h1>
            </div>
            <hr className="bg-danger"/>
            <div className="d-flex justify-content-around">
                <aside className="sidebar mr-5 col-3">
                    <br/>
                    <Category onClick={filter}/>
                </aside>
                
                <div className="row ml-5">
            
                    {product.map((element) => {
                            
                        if(category == "todas"){
                            console.log(category);
                            return (
                                <div key={element.idproduto} className="box-produto card col-2 m-3 border-0">
                                    <div className="card-img">
                                        <img className="img-fluid" src={`http://localhost/Full_Stack_Eletro_React/frontend/components/${element.imagem}`}/>
                                    </div>

                                    <div className="card-header text-center">
                                        {element.descricao}
                                    </div>
                                    
                                    <div className="card-body text-center">
                                        <del className="text-danger small">R$ 
                                            {element.preco}
                                        </del><br/>
                                        Por: R$ {element.precofinal}<br/>
                                    </div>
                                </div>                     
                            );
                        }

                        if(category == element.categoria){
                            console.log(category);
                            return (
                                <div key={element.idproduto} className="box-produto card col-2 m-3 border-0">
                                    <div className="card-img">
                                        <img className="img-fluid" src={`http://localhost/Full_Stack_Eletro_React/frontend/components/${element.imagem}`}/>
                                    </div>

                                    <div className="card-header text-center">
                                        {element.descricao}
                                    </div>

                                    <div className="card-body text-center">
                                        <del className="text-danger small">
                                            R${element.preco}
                                        </del><br/>
                                        Por: R$ {element.precofinal}<br/>
                                    </div>
                                </div>                     
                            );
                        }
                    
                    })}
                </div>
            </div>
        </main>
    );
}
