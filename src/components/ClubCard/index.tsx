import Image from 'next/image';

import { Club } from '@/types/clubResponse';

import * as S from './clubCard.css';

interface ClubCardProps {
  clubInfo: Club;
}

const ClubCard = ({ clubInfo }: ClubCardProps) => {
  return (
    <a
      {...(clubInfo.notionUrl && {
        href: clubInfo.notionUrl,
        target: '_blank',
      })}
      className={`${S.baseCardContainer} ${clubInfo.notionUrl ? S.clickableCard : ''}`}
    >
      <div className={S.ImageWrapper}>
        <Image
          src={clubInfo.iconUrl}
          alt={clubInfo.name}
          fill
          objectFit="cover"
        />
      </div>
      <div className={S.InfoContainer}>
        <div className={S.HeaderRow}>
          <p className={S.ClubTitle}>{clubInfo.name}</p>
          <div className={S.LeaderBadge}>
            <p className={S.LeaderText}>{clubInfo.leader}</p>
          </div>
        </div>
        <p className={S.ProjectTitle}>{clubInfo.mainContent}</p>
      </div>
    </a>
  );
};

export default ClubCard;
