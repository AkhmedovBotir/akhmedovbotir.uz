"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"
import { Button } from "./ui/button"

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  message?: string
}

export default function SuccessModal({ 
  isOpen, 
  onClose, 
  title = "Muvaffaqiyat!",
  message = "Xabaringiz muvaffaqiyatli yuborildi!"
}: SuccessModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glassmorphism border-accent/30 max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold font-space-grotesk text-glow text-center">
            {title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="text-center py-6">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-check text-green-500 text-2xl"></i>
          </div>
          <p className="text-muted-foreground font-dm-sans text-lg">
            {message}
          </p>
        </div>
        
        <div className="flex justify-center">
          <Button 
            onClick={onClose}
            className="glassmorphism hover:neon-glow font-dm-sans px-8"
          >
            <i className="fas fa-check mr-2"></i>
            Tushundim
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
