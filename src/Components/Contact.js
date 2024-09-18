import React, { useState } from 'react';
import './Contact.css';  // CSS dosyasını içe aktarın

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send_contact_email/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('E-posta başarıyla gönderildi!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        alert('E-posta gönderilirken bir hata oluştu.');
      }
    } catch (error) {
      alert('Bir hata oluştu: ' + error.message);
    }
  };

  return (
    <div id="contact" className="contact-section">
      <div className="contact-form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">Ad:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Soyad:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-posta Adresi:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Konu:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">İçerik:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Gönder</button>
        </form>
      </div>
      <div className="contact-info">
        <div className="contact-info-item">
          <i className="fa fa-phone"></i> 0553 766 5752
        </div>
        <div className="contact-info-item">
          <a href="https://www.linkedin.com/in/mustafa-yigit-coskun/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i> LinkedIn
          </a>
        </div>
        <div className="contact-info-item">
          <a href="https://www.instagram.com/myigitcoskun/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i> Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
