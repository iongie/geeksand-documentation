import { trigger, style, transition, animate, AnimationMetadata, keyframes, state } from "@angular/animations";

export const NavDrawerAnimation: AnimationMetadata[] = [
    trigger('navDrawerAnimation', [
        state('*', style({
            left: 0
        })),
        state('void', style({
            left: '-9999px'
        })),
        transition('void => *', [
            animate('100ms', keyframes([
                style({
                    'transition-timing-function': "\
                    cubic-bezier(var(--motion-easing-standard-accelerate-x0),\
                    var(--motion-easing-standard-accelerate-y0),\
                    var(--motion-easing-standard-accelerate-x1),\
                    var(--motion-easing-standard-accelerate-y1))",
                })
            ]))
        ]),
        transition('* => void', [
            animate('100ms', keyframes([
                style({
                    'transition-timing-function': "\
                    cubic-bezier(var(--motion-easing-standard-decelerate-x0),\
                    var(--motion-easing-standard-decelerate-y0),\
                    var(--motion-easing-standard-decelerate-x1),\
                    var(--motion-easing-standard-decelerate-y1))",
                })
            ]))
        ]),
    ])
]