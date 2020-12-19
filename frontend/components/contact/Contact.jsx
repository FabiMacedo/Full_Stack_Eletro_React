const Contact = () => {
    return (
        <main>
            <header className="container-fluid">
                <h1 className="my-3">Contatos</h1>  
            </header>
            <hr className="bg-danger"/>

            <div className="container">
                <table className="table table-borderless">
                    <tr>
                        <td>
                            <img src={"components/imagens/email.png"} width="60px" />&nbsp;
                            contato@fullstackeletro.com
                        </td>
                        <td>
                            <img src={"components/imagens/whatsapp.png"} width="80px" />&nbsp;
                            (11) 99999-9999
                        </td>
                    </tr>
                </table>
            </div>
            <hr className="bg-danger"/>

            <section className="container">
                <h5>Em caso de dúvidas, reclamações, elogios ou sugestões, envie-nos sua mensagem!</h5 >
                <form className="form-group"action="#" method="POST">
                    <label type="text" name="nome">Nome:</label>
                    <input type="text" name="nome" className="form-control border border-danger"/>
                    <label type="text" name="msg">Mensagem:</label>
                    <input type="text" name="msg" className="border border-danger form-control"/>
                    <button className="btn btn-danger btn-block mb-2 mr-sm-2 mt-3" type="submit" name="submit" value="Enviar">Enviar</button>
                </form>
            </section>
            <hr className="bg-danger"/>
        </main>    
    );
}
