import React, {Component} from 'react';
import search from '../../../assets/img/loader-input.svg'

class Search extends Component {
    constructor(props){
        super(props);
    }

    render() {
        let renderIcone;
        if (this.props.loading){
            renderIcone = (<img src="https://www.rest.com.au/App_Themes/NWP/assets/images/icons/loader.gif" width="22px" alt="" style={{objectFit : "contain"}} />)
        }else{
            renderIcone = (<img src={search} width="22px" alt=""/>);
        }
        return (
            <header className="form">
                <div className="top row">
                    <div className="col-md-4 categories first">
                        Notes
                    </div>
                    <div className="col-md-4 categories">
                        Plat
                    </div>
                    <div className="col-md-4 categories last">
                        Truc
                    </div>
                </div>
                <div className="bottom">
                    <form className="form enrichment" onSubmit={this.props.onSearch.bind(this)}>
                        <div className="icon d-flex justify-content-center align-content-center">
                            <div className="cursor spinner d-flex justify-content-center align-content-center"
                                 onClick={this.props.onSearch}>
                                {renderIcone}
                            </div>
                        </div>
                        <input type="text" onChange={this.props.onChange.bind(this)} className="transparent"
                               placeholder="Rechercher un cuisinier…" autoComplete="off"/>
                    </form>
                </div>
            </header>
        )
    }
}

export default Search;