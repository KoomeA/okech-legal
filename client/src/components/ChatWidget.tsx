import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "agent";
  timestamp: Date;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! Welcome to Okech K & Co Advocates. How can we help you today?",
      sender: "agent",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages, isOpen]);

  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    
    if (!inputValue.trim()) return;

    const newUserMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputValue("");

    // Simulate agent response
    setTimeout(() => {
      const agentResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "Thank you for your message. A legal representative will be with you shortly.",
        sender: "agent",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, agentResponse]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {isOpen && (
        <Card className="w-[350px] h-[500px] shadow-2xl border-primary/10 flex flex-col animate-in slide-in-from-bottom-10 fade-in duration-300">
          <CardHeader className="bg-primary text-primary-foreground p-4 rounded-t-xl flex flex-row items-center justify-between space-y-0">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-2 h-2 bg-green-500 rounded-full absolute bottom-0 right-0 ring-1 ring-primary" />
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
              </div>
              <div>
                <CardTitle className="text-sm font-serif font-bold">Client Support</CardTitle>
                <p className="text-xs text-primary-foreground/80">Online</p>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-4 h-4" />
            </Button>
          </CardHeader>
          
          <CardContent className="flex-1 p-0 overflow-hidden bg-muted/30">
            <ScrollArea className="h-full p-4" ref={scrollAreaRef}>
              <div className="flex flex-col gap-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                        msg.sender === "user"
                          ? "bg-primary text-primary-foreground rounded-br-none"
                          : "bg-white border border-border text-foreground rounded-bl-none shadow-sm"
                      }`}
                    >
                      {msg.text}
                      <span className={`text-[10px] block mt-1 opacity-70 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>

          <CardFooter className="p-3 bg-background border-t">
            <form onSubmit={handleSendMessage} className="flex w-full gap-2">
              <Input 
                placeholder="Type a message..." 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 focus-visible:ring-primary"
              />
              <Button type="submit" size="icon" className="bg-secondary hover:bg-secondary/90 text-white shrink-0">
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}

      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="lg"
        className={`h-14 w-14 rounded-full shadow-xl transition-all duration-300 ${
          isOpen 
            ? "bg-secondary hover:bg-secondary/90 rotate-90 scale-0 opacity-0 absolute" 
            : "bg-secondary hover:bg-secondary/90 scale-100 opacity-100"
        }`}
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </Button>
    </div>
  );
}
