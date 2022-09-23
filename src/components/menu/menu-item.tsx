import { componentV2 } from '@/shared/styled';
import { ExtractFromProps } from '@/shared/types/common';
import { createVNode, computed, HTMLAttributes, PropType } from 'vue';
import style from './style';

const menuItemProps = {
  asTitle: Boolean,
  disabled: Boolean,
  bordered: Boolean,
  hoverBordered: Boolean,
  /**
   * 仅在子元素为 a 标签时生效
   */
  active: Boolean,
  childWrapper: {
    type: [String, Boolean] as PropType<string | false>,
    default: void 0,
  },
};

export type IMuneItemProps = ExtractFromProps<typeof menuItemProps>;

export const MenuItem = componentV2<IMuneItemProps, HTMLAttributes>(
  {
    name: 'MenuItem',
    props: menuItemProps,
    setup: (props, { slots }) => {
      const cls = computed(() => [
        {
          'dv-menu-title': props.asTitle,
          disabled: props.disabled,
          bordered: props.bordered,
          'hover-bordered': props.hoverBordered,
        },
      ]);

      const wrapper = computed(() => {
        if (props.childWrapper === void 0) {
          return props.asTitle ? 'span' : 'a';
        }
        if (props.childWrapper === false) {
          return null;
        }
        return props.childWrapper;
      });

      return () => {
        const children = slots.default?.();
        return (
          <li class={cls.value}>
            {wrapper.value
              ? createVNode(
                  wrapper.value,
                  {
                    class: {
                      active: props.active,
                    },
                  },
                  children,
                )
              : children}
          </li>
        );
      };
    },
  },
  style,
);
