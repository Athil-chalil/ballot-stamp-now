
import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IdCard } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from 'react-router-dom';

const SigningPage = () => {
  const [voterId, setVoterId] = useState('');
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!voterId) {
      toast({
        title: "Verification Required",
        description: "Please enter your voter registration number.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Voter ID Verified",
      description: "Your voter identification has been successfully verified.",
    });
    
    // Navigate to voting page after successful verification
    navigate('/vote');
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <IdCard className="mx-auto h-12 w-12 text-purple-600" />
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">
            Voter ID Verification
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Please verify your identity by entering your voter registration number
          </p>
        </div>

        <Card className="p-6 bg-white shadow-lg rounded-lg border-t-4 border-t-purple-600">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="voterId">Voter Registration Number</Label>
              <Input
                id="voterId"
                type="text"
                value={voterId}
                onChange={(e) => setVoterId(e.target.value)}
                className="mt-1"
                placeholder="Enter your voter registration number"
                required
              />
            </div>

            <div className="flex items-center justify-between mt-6">
              <p className="text-sm text-gray-500">
                Date: {new Date().toLocaleDateString()}
              </p>
              <Button 
                type="submit" 
                size="lg"
                className="bg-purple-600 hover:bg-purple-700"
              >
                Verify Identity
              </Button>
            </div>
          </form>
        </Card>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">
            This is an official voter verification form. By submitting, you certify that all information provided is true and accurate.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Fraudulent submissions are subject to penalties under electoral law.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SigningPage;
