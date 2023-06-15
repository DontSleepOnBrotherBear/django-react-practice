import react from 'react'


function PostsComponent(){
    return (
        <p>Posts component</p>
    )
}

export default PostsComponent

// import React, { useState, useEffect } from 'react'
// import { Button, Checkbox, Form, Input } from 'antd';

// export default function LoginForm () {

//     const onFinish = (values) => {
//         console.log('Success:', values);
//         handleLogin(values.email, values.password)
//     };

//     const handleLogin = async (email, password) => {
//         try {
//             let req = await fetch('http://127.0.0.1:8000/login/', {
//                 method: "POST",
//                 headers: { "Content-type": "application/json" },
//                 body: JSON.stringify({
//                     email: email,
//                     password: password
//                 })
//             })
//             if (req.ok) {
//                 let res = await req.json()
//                 console.log('success')
//             }
//         } catch (e) {
//             console.log(e)
//         }
//     }

//     const onFinishFailed = (errorInfo) => {
//         console.log('Failed:', errorInfo);
//     };

//     return(
//     <Form
//         name="basic"
//         labelCol={{
//             span: 8,
//         }}
//         wrapperCol={{
//             span: 8,
//         }}
//         style={{
//             marginTop: 20,
//             margin: 10,
//             justifyContent: 'center'
//         }}
//         initialValues={{
//             remember: true,
//         }}
//         onFinish={onFinish}
//         onFinishFailed={onFinishFailed}
//         autoComplete="off"
//     >
//         <Form.Item
//         label="Email"
//         name="email"
//         rules={[
//             {
//             required: true,
//             message: 'Please input your email!',
//             },
//         ]}
//         >
//         <Input />
//         </Form.Item>

//         <Form.Item
//         label="Password"
//         name="password"
//         rules={[
//             {
//             required: true,
//             message: 'Please input your password!',
//             },
//         ]}
//         >
//         <Input.Password />
//         </Form.Item>

//         <Form.Item
//         name="remember"
//         valuePropName="checked"
//         wrapperCol={{
//             offset: 8,
//             span: 16,
//         }}
//         >
//         <Checkbox>Remember me</Checkbox>
//         </Form.Item>

//         <Form.Item
//         wrapperCol={{
//             offset: 8,
//             span: 16,
//         }}
//         >
//         <Button type="primary" htmlType="submit">
//             Submit
//         </Button>
//         </Form.Item>
//     </Form>
//     )
// }