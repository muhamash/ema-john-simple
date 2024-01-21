import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Firebase from '../../firebase/Firebase';

const auth = getAuth(Firebase);

const onFinish = (values) => {
    console.log( 'Success:', values );
    const password = values.password;
    const email = values.email;
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => { 
        const user = userCredential.user;
        console.log(user)
    // ...
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage)
    });
};

const onFinishFailed = () =>
{
    console.log('failed!')
}

const Register = () => {
    return (
        <div className='py-10'>
            <Form
                    name="basic"
                    labelCol={ { span: 8 } }
                    wrapperCol={ { span: 16 } }
                    style={ { maxWidth: 600 } }
                    initialValues={ { remember: true } }
                    onFinish={ onFinish }
                    onFinishFailed={ onFinishFailed }
                    autoComplete="off"
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={ [ { required: true, message: 'Please input your Email!' } ] }
                    >
                        <Input id="email"/>
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={ [ { required: true, message: 'Please input your password!' } ] }
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={ { offset: 8, span: 16 } }
                    >
                        <Checkbox>Terms and Condition all oka!</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={ { offset: 8, span: 16 } }>
                        <Button className='bg-violet-600' type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
            </Form>
        </div>
    );
};

export default Register;