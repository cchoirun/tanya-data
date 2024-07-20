import React, { useState } from "react";
import oc3 from "../../../../assets/oc3.png"
import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";
import { motion } from "framer-motion";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../Footer";
import { Button, Form, message, Upload } from "antd";
import { Link } from "react-router-dom";

// const [fileList, setFileList] = useState([])
const TalkInvoice = () => {
  return (
    <div className="">
        <Navbar />
        
        <section className="py-16 bg-blue-100 md:py-24">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Invoice
            </h1>
          </div>
        </div>
      </section>
    <div className="max-w-4xl mx-auto my-8 bg-white rounded-lg shadow-md"> 
      <div className="flex items-center justify-center">
        <img src={oc3} className="w-36 md:w-48"/>
      </div>
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold">Open Class</h1>
        <p className="text-gray-600">Deskripsi</p>
        <p className="text-gray-600">Pelatihan yang berisi webinar di bidang data</p>
      </div>
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold">Program yang dibeli</h2>
        <div className="mt-4">
          <div className="flex justify-between">
            <div>
              <p className="font-semibold">Open Class 3 : Image Classification with Deep Learning</p>
              <p className="text-gray-600">Category: Computer Vision</p>
            </div>
            <div>
              <p className="font-semibold">Rp 20k</p>
            </div>
          </div>
          
        </div>
      </div>
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold">Total</h2>
        <div className="mt-4">
          <div className="flex justify-between">
            <p className="text-gray-600">Subtotal</p>
            <p className="font-semibold">Rp 20k</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-600">Tax</p>
            <p className="font-semibold">Rp 0</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-600">Total</p>
            <p className="text-lg font-bold">Rp 20k</p>
          </div>
        </div>
      </div>
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold">Pembayaran</h2>
        <div className="mt-4">
          <div className="flex justify-between">
            <p className="text-gray-600">Mandiri</p>
            <p className="font-semibold">1400022110192 a.n  ALIFFIA ISMA PUTRI </p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-600">Shopeepay/Dana/OVO/Gopay</p>
            <p className="font-semibold">085730839808</p>
          </div>
        </div>
      
      
      {/* Bagian upload bukti */}
      <Form
        onFinish={(values) => {
          console.log({values});
        }}
      >
        <Form.Item
          label="Bukti Pembayaran"
          name={"BuktiPembayaran"}
          valuePropName="fileList"
          getValueFromEvent={(event) => {
            return event?.fileList
          }}
          rules={[
            {
              required: true,
              message: "Tolong masukkan bukti pembayaran"
            },
            {
              validator(_, fileList) {
                return new Promise((resolve, reject) => {
                  if (fileList && fileList[0].size > 3000000){
                    reject("Ukuran file terlalu besar!");
                  }else{
                    resolve("Sukses!");
                  }
              });
            }, 
          }, 
          ]}
        >
          <Upload
            maxCount={1}
            beforeUpload={(file) => {
              return new Promise((resolve, reject) => {
                if (file.size > 3000000){
                  reject("Ukuran file terlalu besar!");
                }else{
                  resolve("Sukses!");
                }
              });
            }}
            // customRequest={(info) => {
            //   setFilelist([info.file]);
            // }}
            // showUploadList={false}
          >
            <Button>Unggah Bukti Pembayaran</Button>
          </Upload>
        </Form.Item>
        {/* <Button type="primary" htmlType="submit" block>Kirim</Button> */}
      </Form>
      </div>
      <div className="flex items-center justify-end p-6">
        <Link to="/talks/success-payment">
          <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
            Konfirmasi Pembayaran
          </button>
        </Link>
      </div>
    </div>
    
    <Footer />
    </div>
  );
};

export default TalkInvoice;