import React, { useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import Firebase from '../../firebase/Firebase';
import { Button, Checkbox, Form, Input } from 'antd';

const auth = getAuth(Firebase);
const googleAuth = new GoogleAuthProvider();

const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = () =>
{
    console.log('failed!')
}

const Login = () =>
{
    const [ user, setUser ] = useState( null );
    const googleSignIn = () =>
    {
        signInWithPopup( auth, googleAuth )
            .then( result =>
            {
                const loggedUser = result.user;
                console.log( loggedUser );
                setUser( loggedUser );
            } )
            .catch( err =>
            {
                console.log( err );
            } );
    }

    const handleSignOut = () =>
    {
        signOut( auth )
            .then( () =>
            {
                setUser( null );
            } )
            .catch( err =>
            {
                console.log( err );
            } );
    }

    return (
        <div className='py-5'>
            <div className='flex items-center justify-center py-3 gap-5'>
                { user ? (
                    <div className='py-3'>
                        <div className='text-lg text-amber-600 font-mono'>User: { user.displayName }, Email: { user.email }</div>
                        <button onClick={ handleSignOut } className='px-3 py-2 my-2'>Logout</button>
                    </div>
                ) : (
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
                                <Input />
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
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <Form.Item wrapperCol={ { offset: 8, span: 16 } }>
                                <Button className='bg-violet-600' type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                        <div className='space-x-3'>
                            <button onClick={ googleSignIn } className='px-3 py-2'>Sign in with Google</button>
                            <button className='px-3 py-2'>Sign in with GitHub</button>
                        </div>
                    </div>
                ) }
            </div>
        </div>
    );
};

export default Login;