'use client';

import { useRouter } from 'next/navigation';

import { ClubSelector, Loading } from '@/components';
import { useMyProfile } from '@/hooks';
import { put } from '@/libs';

import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import * as S from './write.css';

const MAX_CONTENT_LENGTH = 2400;

const WritePage = () => {
  const router = useRouter();

  const [selectedClubs, setSelectedClubs] = useState<string[]>([]);
  const [major, setMajor] = useState('');
  const [content, setContent] = useState('');
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const toggleClub = (club: string) => {
    setSelectedClubs((prev) =>
      prev.includes(club) ? prev.filter((c) => c !== club) : [...prev, club]
    );
    setHasUnsavedChanges(true);
  };

  const handleResizeHeight = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement;
    target.style.height = 'auto';
    target.style.height = `${target.scrollHeight + 1.8}px`;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate();
  };

  const {
    data: myProfile,
    error: myProfileError,
    isLoading: myProfileLoading,
  } = useMyProfile();

  useEffect(() => {
    if (myProfile) {
      setSelectedClubs(myProfile.wanted);
      setMajor(myProfile.major);
      setContent(
        myProfile.content === '아직 자소서를 작성하지 않았습니다.'
          ? ''
          : myProfile.content
      );
      setHasUnsavedChanges(false);
    }
  }, [myProfile]);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (hasUnsavedChanges) {
        event.preventDefault();
        event.returnValue = '';
        return '작성하던 내용이 모두 사라집니다. 계속하시겠습니까?';
      }
    };

    const handleRouteChange = () => {
      if (hasUnsavedChanges) {
        return confirm('작성하던 내용이 모두 사라집니다. 계속하시겠습니까?');
      }
      return true;
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('beforeunload', handleBeforeUnload);

      const originalPush = router.push;
      const originalReplace = router.replace;
      const originalBack = router.back;

      router.push = (...args) => {
        if (handleRouteChange()) {
          return originalPush.apply(router, args);
        }
      };

      router.replace = (...args) => {
        if (handleRouteChange()) {
          return originalReplace.apply(router, args);
        }
      };

      router.back = () => {
        if (handleRouteChange()) {
          return originalBack.apply(router);
        }
      };

      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
        router.push = originalPush;
        router.replace = originalReplace;
        router.back = originalBack;
      };
    }
  }, [hasUnsavedChanges, router]);

  const { mutate } = useMutation({
    mutationFn: () =>
      put('/profile', {
        wanted: selectedClubs,
        major: major.trim(),
        content: content.trim(),
      }),
    onSuccess: () => {
      setHasUnsavedChanges(false);
      if (myProfile && myProfile.studentId && myProfile.name) {
        router.push(`/profile/${myProfile.studentId}${myProfile.name}`);
        toast.success('작성이 완료되었습니다.');
      } else {
        toast.error('프로필 정보를 찾을 수 없습니다.');
      }
    },
    onError: () => {
      toast.error('문제가 발생했습니다. 잠시 후 다시 시도해 주세요.');
    },
  });

  if (myProfileLoading) return <Loading />;

  if (myProfileError) {
    toast.error('프로필 정보를 찾을 수 없습니다.');
    console.error(myProfileError);
  }

  return (
    <div className={S.WritePageContainer}>
      <p className={S.Title}>자기소개서 작성</p>
      <form className={S.Form} onSubmit={handleSubmit}>
        <div className={S.Section}>
          <p className={S.SectionTitle}>전공</p>
          <input
            value={major}
            onChange={(e) => {
              setMajor(e.target.value);
              setHasUnsavedChanges(true);
            }}
            placeholder="전공을 작성해주세요. ex) 프론트엔드"
            className={S.InputField}
          />
        </div>
        <div className={S.Section}>
          <div className={S.SectionHeader}>
            <p className={S.SectionTitle}>동아리</p>
            <p className={S.SectionSubtitle}>
              {String(myProfile?.studentId)[0] === '1' ? '희망' : '소속'}{' '}
              동아리를 선택해주세요.
            </p>
          </div>
          <div className={S.ToggleGroup}>
            <ClubSelector
              selectedClubs={selectedClubs}
              toggleClub={toggleClub}
            />
          </div>
        </div>
        <div className={S.Section}>
          <div className={S.SectionTitleBox}>
            <p className={S.SectionTitle}>내용</p>
            <p className={S.SectionSubtitle}>
              {content.length}/{MAX_CONTENT_LENGTH}
            </p>
          </div>
          <textarea
            value={content}
            onChange={(e) => {
              const newContent = e.target.value;
              if (newContent.length <= MAX_CONTENT_LENGTH) {
                setContent(newContent);
                setHasUnsavedChanges(true);
              } else {
                toast.warn('2400자를 초과했습니다.');
              }
              handleResizeHeight(e);
            }}
            placeholder="나의 장단점, 각오, 현재하고 있는 공부 등을 자유롭게 작성해보세요."
            className={S.TextareaField}
          />
        </div>
        <button type="submit" className={S.SubmitButton}>
          작성 완료
        </button>
      </form>
    </div>
  );
};

export default WritePage;
