"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-merriweather mb-4">
            Hubungi Kami
          </h1>
          <p className="text-xl text-muted-foreground">
            Kami senang mendengar dari Anda. Kirim pesan dan kami akan segera merespons.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Send className="h-5 w-5 mr-2 text-coral" />
                Kirim Pesan
              </CardTitle>
              <CardDescription>
                Gunakan formulir ini untuk mengirim pesan langsung ke redaksi kami.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nama Lengkap</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Masukkan nama lengkap"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="nama@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subjek</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Masukkan subjek pesan"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Pesan</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tulis pesan Anda di sini..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-coral hover:bg-coral/90 text-white"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Kirim Pesan
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle>Informasi Kontak</CardTitle>
                <CardDescription>
                  Berbagai cara untuk menghubungi tim redaksi LangsaPost.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-coral mt-1" />
                  <div>
                    <h3 className="font-semibold">Email Redaksi</h3>
                    <p className="text-muted-foreground">redaksi@langsapost.com</p>
                    <p className="text-sm text-muted-foreground">
                      Untuk pertanyaan editorial dan kerjasama
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-coral mt-1" />
                  <div>
                    <h3 className="font-semibold">Telepon</h3>
                    <p className="text-muted-foreground">+62 21 1234 5678</p>
                    <p className="text-sm text-muted-foreground">
                      Senin - Jumat, 09:00 - 17:00 WIB
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-coral mt-1" />
                  <div>
                    <h3 className="font-semibold">Alamat</h3>
                    <p className="text-muted-foreground">
                      Jl. Jendral Sudirman No. 123<br />
                      Jakarta Pusat, 10110<br />
                      Indonesia
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-coral mt-1" />
                  <div>
                    <h3 className="font-semibold">Jam Operasional</h3>
                    <p className="text-muted-foreground">
                      Senin - Jumat: 09:00 - 17:00 WIB<br />
                      Sabtu: 10:00 - 15:00 WIB<br />
                      Minggu: Tutup
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Department Contacts */}
            <Card>
              <CardHeader>
                <CardTitle>Kontak Departemen</CardTitle>
                <CardDescription>
                  Hubungi departemen yang sesuai dengan kebutuhan Anda.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h3 className="font-semibold mb-2">Redaksi</h3>
                  <p className="text-sm text-muted-foreground">
                    Untuk tips berita, press release, dan informasi editorial
                  </p>
                  <p className="text-sm font-medium text-coral">
                    editor@langsapost.com
                  </p>
                </div>
                
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h3 className="font-semibold mb-2">Iklan & Kerjasama</h3>
                  <p className="text-sm text-muted-foreground">
                    Untuk pemasangan iklan dan proposal kerjasama
                  </p>
                  <p className="text-sm font-medium text-coral">
                    marketing@langsapost.com
                  </p>
                </div>
                
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h3 className="font-semibold mb-2">Teknis</h3>
                  <p className="text-sm text-muted-foreground">
                    Untuk masalah teknis website dan aplikasi
                  </p>
                  <p className="text-sm font-medium text-coral">
                    support@langsapost.com
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}