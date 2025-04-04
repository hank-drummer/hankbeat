import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    wechat: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 这里可以添加表单提交逻辑
    console.log('Form submitted:', formData);
    // 清空表单
    setFormData({
      name: '',
      email: '',
      phone: '',
      wechat: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-4"
      >
        <h1 className="text-4xl font-bold mb-8 text-center text-white">联系我</h1>
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-800/50 p-8 rounded-lg backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2" htmlFor="name">姓名</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-accent"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2" htmlFor="email">邮箱</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-accent"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2" htmlFor="phone">电话</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-accent"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2" htmlFor="wechat">微信</label>
                <input
                  type="text"
                  id="wechat"
                  name="wechat"
                  value={formData.wechat}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-accent"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2" htmlFor="message">留言</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-accent"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 px-6 rounded-lg bg-accent text-white font-semibold hover:bg-accent/90 transition-colors"
              >
                提交预约
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;