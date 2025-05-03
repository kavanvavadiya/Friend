import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, Heart } from 'lucide-react';
import { messages as initialMessages } from '../data/messages';
import { Message } from '../types';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const MessageBoard: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [hearts, setHearts] = useState<{ [key: number]: boolean }>({});
  const [animation, setAnimation] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messageInputRef = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  // }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const message: Message = {
        id: Date.now(),
        text: newMessage.trim(),
        author: 'Friend',
      };

      try {
        // Replace these with your actual EmailJS credentials
        await emailjs.send(
          'service_dvy4krh',
          'template_gcriikf',
          {
            message: newMessage.trim(),
            from_name: 'Gauri',
            to_name: 'Kavan',
          },
          'vR1Xk2ZSeRf_GW-HY'
        );

        setMessages([...messages, message]);
        setNewMessage('');
        setAnimation(true);
        setTimeout(() => setAnimation(false), 1000);
        messageInputRef.current?.focus();
        
        toast.success('Message sent successfully!', {
          duration: 3000,
          position: 'bottom-center',
          style: {
            background: '#10B981',
            color: '#fff',
          },
        });
      } catch (error) {
        toast.error('Failed to send message. Please try again.', {
          duration: 3000,
          position: 'bottom-center',
        });
      }
    }
  };

  const toggleHeart = (id: number) => {
    setHearts(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="messages" className="py-16 sm:py-20 bg-gradient-to-b from-white to-purple-50">
      <Toaster />
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">Message Board</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-md sm:max-w-2xl mx-auto">
            Leave a sweet note or read through the collection of heartfelt messages. Your words will be sent directly to me.
          </p>
        </div>

        <div className="max-w-md sm:max-w-lg md:max-w-2xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 py-3 sm:py-4 px-4 sm:px-6">
            <div className="flex items-center text-white">
              <MessageSquare className="mr-2" size={18} />
              <h3 className="font-semibold text-base sm:text-lg">Messages for You</h3>
            </div>
          </div>

          <div className="h-64 sm:h-80 md:h-96 overflow-y-auto p-4 sm:p-6 bg-gray-50">
            {messages.map((message) => (
              <div 
                key={message.id}
                className={`mb-3 sm:mb-4 ${
                  message.author === 'Friend' 
                    ? 'flex justify-end' 
                    : 'flex justify-start'
                }`}
              >
                <div 
                  className={`
                    max-w-[75%] sm:max-w-xs md:max-w-md rounded-lg p-2 sm:p-3 
                    ${message.author === 'Friend' 
                      ? 'bg-purple-100 text-gray-800' 
                      : 'bg-pink-100 text-gray-800'
                    }
                  `}
                >
                  <p className="mb-1 text-sm sm:text-base">{message.text}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">{message.author}</span>
                    <button 
                      onClick={() => toggleHeart(message.id)}
                      className="focus:outline-none"
                      aria-label={hearts[message.id] ? "Unlike" : "Like"}
                    >
                      <Heart 
                        size={14} 
                        className={`transition-colors ${
                          hearts[message.id] 
                            ? 'text-red-500 fill-red-500' 
                            : 'text-gray-400'
                        }`} 
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-3 sm:p-4 border-t">
            <div className="flex items-center">
              <input
                type="text"
                ref={messageInputRef}
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 border rounded-l-lg py-2 px-3 sm:px-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <button 
                type="submit" 
                className={`
                  bg-gradient-to-r from-pink-500 to-purple-600 text-white p-2 rounded-r-lg
                  hover:from-pink-600 hover:to-purple-700
                  focus:outline-none focus:ring-2 focus:ring-pink-400
                  ${animation ? 'animate-wiggle' : ''}
                `}
                aria-label="Send message"
              >
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MessageBoard;