const Category = (props) => {
    
    function filter(event){
        props.onClick(event.target.id) 
    }

    return(
        <ul className="list-group text-center sidebar border border-danger">
                <li className="list-group-item font-weight-bold bg-danger border border-danger">Categorias</li>
                <li onClick={filter} id="todas" className="list-group-item border border-danger">Todas</li>
                <li onClick={filter} id="geladeira" className="list-group-item border border-danger">Geladeira</li>
                <li onClick={filter} id="fogao" className="list-group-item border border-danger">Fogão</li>
                <li onClick={filter} id="microondas" className="list-group-item border border-danger">Microondas</li>
                <li onClick={filter} id="lava-loucas" className="list-group-item border border-danger">Lava-louças</li>
                <li onClick={filter} id="lavadora de roupas" className="list-group-item border border-danger">Máquina de Lavar</li>
            </ul>
    )
}
   