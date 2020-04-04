import React from 'react'
import { Modal, Form, Input, Switch, Button } from 'antd'

const layout = {
  labelCol: { span: 8  },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 0, span: 24 },
};

export default class AddForm extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };

  onFinish = values => {
    this.props.add(values)
    this.setState({ visible: false });
  };

  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  render() {
    return (
      <div id="addConfirm">
        <Button id="addBtn" type="primary" shape="circle" onClick={this.showModal}>A</Button>
        {this.state.visible && <Modal
          closable={false}
          visible={true}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
          <Form id="addForm" {...layout} onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
            <Form.Item label="指令名称" name="name" rules={[{ required: true, message: '必须指定名称' }]}>
              <Input size="small" />
            </Form.Item>
            <Form.Item label="指令描述" name="desc" rules={[{ required: true, message: '必须指定描述' }]}>
              <Input size="small" />
            </Form.Item>
            <Form.Item label="执行脚本" name="method" rules={[{ required: true, message: '必须指定脚本' }]}>
              <Input size="small" />
            </Form.Item>
            <Form.Item label=" 附加参数" name="args" valuePropName="checked">
              <Switch size="small" />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <div className="controll">
                <Button size="small" type="" onClick={this.handleCancel}>取消</Button>
                <Button size="small" type="primary" htmlType="submit">确认</Button>
              </div>
            </Form.Item>
          </Form>
        </Modal>}
      </div>
    );
  }
}