const Comment = () => {

    const [comment, setComment] = React.useState([]);

    React.useEffect(async () => {
        const url = "http://localhost:3333/comentarios";
        const response = await fetch(url);
        setComment(await response.json());
    }, []);

    return (
        <div className="container-fluid">
            <div className="container">
                <h2>Comentários dos Clientes</h2>
            </div>

            <div className="container">
                <section className="form">
                    {comment.map((item) => {
                        return (
                            <div  key={item.id_comentarios}>
                                <hr className="bg-danger"/>
                                <p>Nome: {item.nome}</p>
                                <p>Mensagem: {item.msg}</p>
                                <p>Data: {item.data}</p>
                            </div>          
                        )
                    })}               
                </section>         
            </div>
        </div>
    );
}