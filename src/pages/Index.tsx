
import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SignaturePad from '@/components/SignaturePad';
import { FileCheck } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const SigningPage = () => {
  const [voterName, setVoterName] = useState('');
  const [voterId, setVoterId] = useState('');
  const [signature, setSignature] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!voterName || !voterId || !signature) {
      toast({
        title: "Error",
        description: "Please fill in all fields and provide a signature.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Signature Submitted",
      description: "Your electronic signature has been recorded.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <FileCheck className="mx-auto h-12 w-12 text-blue-600" />
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">
            Electronic Signature Verification
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Please complete this form to verify your identity and cast your vote
          </p>
        </div>

        {/* Main Form */}
        <Card className="p-6 bg-white shadow-lg rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="voterName">Full Legal Name</Label>
                <Input
                  id="voterName"
                  type="text"
                  value={voterName}
                  onChange={(e) => setVoterName(e.target.value)}
                  className="mt-1"
                  placeholder="Enter your full legal name"
                  required
                />
              </div>

              <div>
                <Label htmlFor="voterId">Voter ID Number</Label>
                <Input
                  id="voterId"
                  type="text"
                  value={voterId}
                  onChange={(e) => setVoterId(e.target.value)}
                  className="mt-1"
                  placeholder="Enter your voter ID number"
                  required
                />
              </div>

              <div>
                <Label>Digital Signature</Label>
                <div className="mt-1">
                  <SignaturePad onSignatureChange={setSignature} />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-6">
              <p className="text-sm text-gray-500">
                Date: {new Date().toLocaleDateString()}
              </p>
              <Button type="submit" size="lg">
                Submit Signature
              </Button>
            </div>
          </form>
        </Card>

        <p className="mt-4 text-center text-sm text-gray-500">
          By submitting this form, you confirm that all provided information is true and accurate.
        </p>
      </div>
    </div>
  );
};

export default SigningPage;
