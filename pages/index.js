import stylesheet from 'antd/dist/antd.min.css'
import { Layout, Menu } from 'antd';

class Index extends React.Component {
  static getInitialProps = async() => ({ blah: 'blah' });

  render() {
    return (
      <Layout>
        <style dangerouslySetInnerHTML={{__html: stylesheet}} />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
        >
      <Menu.Item key="1">nav 1</Menu.Item>
      <Menu.Item key="2">nav 2</Menu.Item>
      <Menu.Item key="3">nav 3</Menu.Item>
    </Menu>
    </Layout>
    );
  }
}
 
export default Index;