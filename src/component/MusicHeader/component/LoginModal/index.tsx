import { Button, Form, Image, Input, Modal } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  LoginGetKey,
  LoginGetImgByKey,
  LoginByCellphone,
} from '../../../../api';

import './index.less';
export default function LoginModal(props: any) {
  const { visible, handleClose } = props;
  const [key, setKey] = useState();
  const [imgsrc, setImgsrc] = useState();
  const [img, setImg] = useState(true);
  const [status, setStatus] = useState();
  const [loginForm] = Form.useForm();
  const getImg = async () => {
    await LoginGetKey({ timerstamp: Date.now() }).then((res) => {
      setKey(res.data.unikey);
    });
    await LoginGetImgByKey({ key, qrimg: true, timer: Date.now() }).then(
      (res) => {
        setImgsrc(res.data.qrimg);
      },
    );
  };
  const handleLogin = () => {
    const params = loginForm.getFieldsValue();
    LoginByCellphone(params).then((res) => {
      if (res.code === 200) {
        handleClose();
      }
    });
  };
  const handleReset = () => {
    loginForm.resetFields();
  };
  useEffect(() => {
    getImg();
  }, []);

  return (
    <Modal
      visible={visible}
      mask={false}
      footer=""
      onCancel={handleClose}
      className="loginmodal"
    >
      {img ? (
        <>
          <div>
            <h1>扫码登录</h1>
            <Image src={imgsrc} />
          </div>
          <a onClick={() => setImg(false)}>选择其他方式登录</a>
        </>
      ) : (
        <>
          <Form form={loginForm}>
            <Form.Item
              label="手机号"
              name="phone"
              rules={[{ required: true, message: '请输入你的手机号！' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: '请输入你的密码！' }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button type="primary" onClick={handleLogin}>
                登录
              </Button>
              <Button onClick={handleReset}>重置</Button>
            </Form.Item>
          </Form>
          <a onClick={() => setImg(true)}>扫码登录更安全</a>
        </>
      )}
    </Modal>
  );
}
