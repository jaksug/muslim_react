import { Col, Layout, Row, Typography ,List, Icon} from 'antd';
import React from 'react';

import './index.scss';
const axios = require('axios');
const { Title } = Typography;
const { Content } = Layout;

class Doa extends React.Component {
    state = {
        loading : false,
        doas : []
    };

    componentDidMount() {
        this.fetch()
    }

    fetch = (e) => {
        var self = this;
        self.setState({ loading: true });
       

        axios.get('http://165.22.59.78/muslim_content/public/list_doa')
            .then(function (response) {
                self.setState({ doas: response.data.data, loading: false });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        return (
            <Layout>
             
                <Content style={{ marginTop: 0 }}>


                    <Row style={{background :'#51AA94',marginBottom:'20px',height:'50px',padding:'10px 0'}}>

                        <center><Title level={4}  style={{color:'#fff'}}>Doa Harian</Title></center>
                        </Row>
                        <Row style={{  marginTop: '0px'}}>
                            <Col
                                xs={24} sm={24} md={24} lg={24} xl={24} 
                                style={{padding:'0px 10px'}}
                            >
                                 <List


dataSource={this.state.doas}
renderItem={item => (
    
  <List.Item className="doaItem" href={'/detail_doa?id='+item.id}>
 
       <List.Item.Meta
               
               title={<a href={'/detail_doa?id='+item.id}>{item.nama}</a>}
          
             />
             <div>   <Icon  color="#111" type="right" /></div>



   
              
  </List.Item>
)}
/>
                            </Col>
                        </Row>



                

                   




                </Content>
            </Layout>

        );
    }
}

export default Doa;