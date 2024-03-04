import React from 'react';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';
import { siteConfig } from '@/constant/config';

const SidebarIcons = {
  intro: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      width={20}
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25'
      />
    </svg>
  ),
  api: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      width={20}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5'
      />
    </svg>
  ),
  code: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      width={20}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5'
      />
    </svg>
  ),
  community: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      width={20}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z'
      />
    </svg>
  ),
  github: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      x='0px'
      y='0px'
      stroke='currentColor'
      width={20}
      viewBox='0 0 24 24'
    >
      <path d='M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z'></path>
    </svg>
  ),
  template: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={20}
      strokeWidth={1.5}
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9'
      />
    </svg>
  ),
};

const config: DocsThemeConfig = {
  logo: (
    <span>
      <img src='/images/formbit-logo.png' alt='formbit' />
    </span>
  ),
  project: {
    link: 'https://github.com/torqbit/formbit',
  },
  head: function useHead() {
    const { title } = useConfig();
    const { route } = useRouter();
    const socialCard =
      route === '/' || !title
        ? `${siteConfig.url}images/screenshot-formbit.jpg`
        : `${siteConfig.url}images/screenshot-formbit.jpg?title=${title}`;

    return (
      <>
        <meta name='msapplication-TileColor' content='#fff' />
        <meta name='theme-color' content='#fff' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='Content-Language' content='en' />
        <meta
          name='description'
          content='Next.JS + TailwindCSS + HeadlessUI powered website template for your next SaaS marketing website'
        />
        <meta
          name='og:description'
          content='Next.JS + TailwindCSS + HeadlessUI powered website template for your next SaaS marketing website'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:image' content={socialCard} />
        <meta name='twitter:site:domain' content='formbit' />
        <meta name='twitter:url' content={siteConfig.url} />
        <meta
          name='og:title'
          content={title ? title + ' – Formbit' : 'Formbit'}
        />
        <meta name='og:image' content={socialCard} />
        <meta name='apple-mobile-web-app-title' content='formbit' />
        <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
        <link rel='icon' href='/favicon.png' type='image/png' />
        <link
          rel='icon'
          href='/favicon-dark.svg'
          type='image/svg+xml'
          media='(prefers-color-scheme: dark)'
        />
        <link
          rel='icon'
          href='/favicon-dark.png'
          type='image/png'
          media='(prefers-color-scheme: dark)'
        />
      </>
    );
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (title === 'Introduction') {
        return (
          <>
            {SidebarIcons.intro}
            <span style={{ marginLeft: 5 }}>{title}</span>
          </>
        );
      } else if (title === 'API Reference') {
        return (
          <>
            {SidebarIcons.api}
            <span style={{ marginLeft: 5 }}>{title}</span>
          </>
        );
      } else if (title === 'SDK Reference') {
        return (
          <>
            {SidebarIcons.code}
            <span style={{ marginLeft: 5 }}>{title}</span>
          </>
        );
      } else if (title === 'Community') {
        return (
          <>
            {SidebarIcons.community}
            <span style={{ marginLeft: 5 }}>{title}</span>
          </>
        );
      } else if (title === 'GitHub') {
        return (
          <>
            {SidebarIcons.github}
            <span style={{ marginLeft: 5 }}>{title}</span>
          </>
        );
      } else if (title === 'Templates') {
        return (
          <>
            {SidebarIcons.template}
            <span style={{ marginLeft: 5 }}>{title}</span>
          </>
        );
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },

  docsRepositoryBase: 'https://github.com/torqbit/formbit',
  footer: {
    text: (
      <span>
        <img src='/images/formbit-logo.png' alt='formbit' />
      </span>
    ),
  },
  toc: {
    backToTop: true,
  },
};

export default config;
