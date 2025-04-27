
import { useRef, useState } from 'react';
import { Button } from "@/components/ui/button";

interface SignaturePadProps {
  onSignatureChange: (signature: string | null) => void;
}

const SignaturePad = ({ onSignatureChange }: SignaturePadProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    setIsDrawing(true);
    ctx.beginPath();
    ctx.moveTo(
      e.clientX - canvas.getBoundingClientRect().left,
      e.clientY - canvas.getBoundingClientRect().top
    );
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.lineTo(
      e.clientX - canvas.getBoundingClientRect().left,
      e.clientY - canvas.getBoundingClientRect().top
    );
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    const canvas = canvasRef.current;
    if (!canvas) return;
    onSignatureChange(canvas.toDataURL());
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    onSignatureChange(null);
  };

  return (
    <div className="space-y-2">
      <div className="border rounded-lg p-2 bg-white">
        <canvas
          ref={canvasRef}
          width={400}
          height={150}
          className="border border-gray-200 rounded touch-none w-full"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
        />
      </div>
      <Button
        type="button"
        variant="outline"
        onClick={clearSignature}
        className="w-full"
      >
        Clear Signature
      </Button>
    </div>
  );
};

export default SignaturePad;
