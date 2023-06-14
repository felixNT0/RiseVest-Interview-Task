import React, {useState} from 'react';
import ChooseBank from './ChooseBank';
import ChoosePlan from './ChoosePlan';
import FundWalletType from './FundWalletType';

const steps = [
  {key: 1, component: FundWalletType},
  {key: 2, component: ChoosePlan},
  {key: 3, component: ChooseBank},
  // {key: 4, component: CreatePlanFormThree},
  // {key: 5, component: CreatePlanReview},
];

function FundWallet() {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [fundType, setFundType] = useState<string>('');
  const [planId, setPlanId] = useState<string>('');

  const handleNext = ({
    FundType,
    PlanId,
  }: {
    FundType?: string;
    PlanId?: string;
  }) => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
    if (currentStepIndex === 1 && FundType) {
      setFundType(FundType as string);
    }
    if (currentStepIndex === 2 && PlanId) {
      setPlanId(PlanId as string);
    }
  };

  const handleBack = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const Components = steps[currentStepIndex]?.component as any;

  return <Components handleBack={handleBack} handleNext={handleNext} />;
}

export default FundWallet;
