import { Col, Layout, Row } from 'antd';
import React from 'react';
import queryString from 'query-string'
import './index.scss';
import { withRouter } from 'react-router-dom'
const axios = require('axios');
const { Content } = Layout;

class DetailDoa extends React.Component {
    state = {
        loading : false,
        doa : null,
        id : null,
    };

    componentDidMount() {
        let parameters = queryString.parse(this.props.location.search)
        this.setState({
            id : parameters.id
        }, () => {
            this.fetch()
        });
    }

    fetch = (e) => {
        var self = this;
        self.setState({ loading: true });

        axios.get('http://165.22.59.78/muslim_content/public/detail_doa/'+this.state.id)
            .then(function (response) {
                self.setState({ doa: response.data.data, loading: false });
            })
            .catch(function (error) {
                console.log(error);
            });
    }



    render() {
    
        if(this.state.doa != null) {
            return (
                <Layout>
                 
                    <Content style={{ marginTop: 54 ,background : '#008D94'}}>
    
    
                        <Row
    
                            style={
                                {
                                    marginTop: '60px'
                                }
                            }
                        >
    
                            <Row style={{  marginTop: '90px'}}>
                                <Col
                                    span={18} offset={3}
                                >
                                </Col>
                            </Row>
                        </Row>
                    </Content>
                </Layout>
    
            );
        } else {
            return (
                <Layout>
                    <Content style={{ marginTop: 54 }}>
                        <Row style={{  marginTop: '60px'}} >
                            <Row style={{  marginTop: '90px'}}>
                                <Col
                                    span={18} offset={3}
                                >
                               
                                </Col>
                            </Row>
                        </Row>
                    </Content>
                </Layout>
    
            );
        }
        
    }
}

export default withRouter(DetailDoa);