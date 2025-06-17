import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';
import AgentExtrasSection from '../../components/agent/AgentExtrasSection';
import AgentHeroSection from '../../components/agent/AgentHeroSection';
import AgentBenefitsSection from '../../components/agent/AgentBenefitsSection';
import AgentAudienceSection from '../../components/agent/AgentAudienceSection';
import AgentFinalCTASection from '../../components/agent/AgentFinalCTASection';
import SearchHeroSection from '../../components/search/SearchHeroSection';
import SearchBenefitsSection from '../../components/search/SearchBenefitsSection';
import BackHomeButton from '../../libs/components/BackHomeButton';
import { getServiceById } from '../../services/Services';

interface FeatureDetailPageProps {
  serviceId?: string;
}

const FeatureDetailPage: React.FC<FeatureDetailPageProps> = ({ serviceId }) => {
  const params = useParams<{ id: string }>();
  const id = serviceId ?? params.id;

  const service = getServiceById(id ?? '');

  if (!service) {
    return (
      <Container maxWidth="md" sx={{ py: 10, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Ferramenta não encontrada
        </Typography>
        <Typography paragraph>
          A ferramenta que você está procurando não existe ou foi removida.
        </Typography>
        <BackHomeButton sx={{ mt: 2 }} />
      </Container>
    );
  }

  return (
    <Box sx={{ pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        {id === 'ai-public-bidding' && (
          <>
            <AgentHeroSection />
            <AgentBenefitsSection />
            <AgentAudienceSection />
          </>
        )}

        {id === 'ai-public-bidding' && (
          <>
            <AgentExtrasSection />
            <AgentFinalCTASection />
          </>
        )}

        {id === 'ai-search-companies' && (
          <>
            <SearchHeroSection />
            <SearchBenefitsSection />
          </>
        )}
      </Container>
    </Box>
  );
};

export default FeatureDetailPage;
