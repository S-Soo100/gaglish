'use client';

import CardAddButtonContainer from '@/components/card/add/button/CardAddButtonContainer';
import CardAddEnglishContainer from '@/components/card/add/english/CardAddEnglishContainer';
import CardAddFieldContainer from '@/components/card/add/field/CardAddFieldContainer';
import CardAddKoreanContainer from '@/components/card/add/korean/CardAddKoreanContainer';
import CardAddMeaningContainer from '@/components/card/add/meaning/CardAddMeaningContainer';
import CardAddPartOfSpeechContainer from '@/components/card/add/partOfSpeech/CardAddPartOfSpeechContainer';

export default function Page() {
  return (
    <section>
      <CardAddEnglishContainer />
      <CardAddKoreanContainer />
      <CardAddPartOfSpeechContainer />
      <CardAddMeaningContainer />
      <CardAddFieldContainer />
      <CardAddButtonContainer />
    </section>
  );
}
