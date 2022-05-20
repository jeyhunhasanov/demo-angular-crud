import {animate, animateChild, group, query as q, style, transition, trigger} from '@angular/animations'

const query = (s: any, a: any, o = {optional: true}) => q(s, a, o)

export const routeTransitionAnimations = trigger('routerTransition', [
  transition('* <=> *', [
    style({position: 'relative'}),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        right: 0,
        width: '100%'
      })
    ]),
    query(':enter', [style({right: '-100%'})]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('.3s ease-in-out', style({right: '100%'}))]),
      query(':enter', [animate('.3s ease-in-out', style({right: '0%'}))])
    ]),
    query(':enter', animateChild())
  ])
])
