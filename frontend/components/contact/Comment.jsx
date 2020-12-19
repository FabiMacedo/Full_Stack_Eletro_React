const Comment = () => {

    const [comment, setComment] = React.useState([]);
    React.useEffect(async () => {
        const url = "http://localhost/Full_Stack_Eletro_React/backend/consult-comment.php";
        const response = await fetch(url);
        setComentario(await response.json());
    }, []);

    return (
        <div className="container-fluid">
            <div className="container">
                <h2>Comentários dos Clientes</h2>
            </div>
            <hr className="bg-danger"/>

            <div className="container">
                <section className="form">
                    {comment.map (item => {
                        return (
                            <div>
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