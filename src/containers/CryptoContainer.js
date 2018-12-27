import React, { Component } from 'react';
import { connect } from "react-redux";
import "../actions/cryptoAction";
import getCrypto  from '../actions/cryptoAction';
import MarketCap from "./MarketCap";
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

class CryptoContainer extends Component {
    state = {  }

    componentWillMount(){
        this.props.dispatch(getCrypto());
    }

    render() { 
        
        console.log(this.props.crypto)
        return ( 
            <div>
                {this.props.crypto!=null?
                    <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell width={1}>Rank</Table.HeaderCell>
                            <Table.HeaderCell width={3}>Name</Table.HeaderCell>
                            <Table.HeaderCell width={3}>Supply</Table.HeaderCell>
                            <Table.HeaderCell width={1}>Market Cap</Table.HeaderCell>
                            <Table.HeaderCell width={1}>Up/Down</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                    {this.props.crypto.map((x,i)=>                    
                          <Table.Row key={x.id}>
                            <Table.Cell>{x.cmc_rank}</Table.Cell>
                                {x.cmc_rank===1?
                                    <Table.Cell key ={i}>
                                        <Label ribbon color='yellow'>
                                            {x.name}
                                        </Label>
                                    </Table.Cell>
                                  :[
                                      (x.cmc_rank===2?
                                        <Table.Cell key ={i}>
                                            <Label ribbon color='grey'>
                                                {x.name}
                                            </Label>
                                        </Table.Cell>
                                        : [
                                            (x.cmc_rank===3?
                                                <Table.Cell key ={i}>
                                                    <Label ribbon color='brown'>
                                                        {x.name}
                                                    </Label>
                                                </Table.Cell>
                                                :
                                                <Table.Cell key ={i}>
                                                    {x.name}
                                                </Table.Cell>
                                            )
                                        ]
                                      )
                                    ]
                                }
                              
                            
                            <Table.Cell>{x.max_supply}</Table.Cell>
                            <Table.Cell>
                                <MarketCap marketvalue={x.quote.USD.market_cap}/>
                            </Table.Cell>
                            {x.quote.USD.percent_change_24h>0?
                                <Table.Cell positive>
                                    <Icon name="arrow up" color="green"/> 
                                    {x.quote.USD.percent_change_24h.toFixed(2)}
                                </Table.Cell>
                            :
                                <Table.Cell negative><Icon name="arrow down" color="red"/>{x.quote.USD.percent_change_24h.toFixed(2)}</Table.Cell>
                            }
                            
                        </Table.Row>
                    )}
                    </Table.Body>
                     <Table.Footer>
                       <Table.Row>
                         <Table.HeaderCell colSpan='3'>
                           <Menu floated='right' pagination>
                             <Menu.Item as='a' icon>
                               <Icon name='chevron left' />
                             </Menu.Item>
                             <Menu.Item as='a'>1</Menu.Item>
                             <Menu.Item as='a'>2</Menu.Item>
                             <Menu.Item as='a'>3</Menu.Item>
                             <Menu.Item as='a'>4</Menu.Item>
                             <Menu.Item as='a' icon>
                               <Icon name='chevron right' />
                             </Menu.Item>
                           </Menu>
                         </Table.HeaderCell>
                       </Table.Row>
                     </Table.Footer>
                      </Table>
                    :
                    <h1>Nothing to fetch</h1>
                }
            </div>
         );
    }
}

function mapStateToProps(store){
    return{
        crypto:store.crypto
    }
}

export default connect(mapStateToProps)(CryptoContainer);