
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Vote as VoteIcon } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const VotePage = () => {
  const { toast } = useToast();
  const candidates = [
    { id: 1, name: "John Smith", party: "Progressive Party", position: "President" },
    { id: 2, name: "Sarah Johnson", party: "Liberty Party", position: "President" },
    { id: 3, name: "Michael Chen", party: "Unity Party", position: "President" },
  ];

  const handleVote = (candidateId: number) => {
    toast({
      title: "Vote Recorded",
      description: "Your vote has been successfully recorded.",
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <VoteIcon className="mx-auto h-12 w-12 text-purple-600" />
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">
            Cast Your Vote
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Select your preferred candidate for the presidential election
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {candidates.map((candidate) => (
            <Card key={candidate.id} className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{candidate.name}</h3>
                  <p className="text-sm text-gray-500">{candidate.party}</p>
                  <p className="text-sm font-medium text-purple-600">{candidate.position}</p>
                </div>
                <Button 
                  onClick={() => handleVote(candidate.id)}
                  className="w-full bg-purple-600 hover:bg-purple-700"
                >
                  Vote for {candidate.name}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Your vote is confidential and secured using industry-standard encryption.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Once submitted, your vote cannot be changed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VotePage;
