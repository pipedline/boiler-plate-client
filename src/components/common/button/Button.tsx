import styled, { css } from 'styled-components';
import oc from 'open-color';

interface ButtonProps {
  color:
    'primary' |
    'danger' |
    'success' |
    'dark';
  outline?: boolean;
  fullWidth?: boolean
}

const colorStyles = css<ButtonProps>`
  ${({ color }) =>
          color === 'dark' &&
          css`
            background-color: ${oc.black};
          `
  };

  ${({ color }) =>
          color === 'primary' &&
          css`
            background: ${oc.indigo[5]};
          `
  };

  ${({ color }) =>
          color === 'danger' &&
          css`
            background-color: ${oc.red[7]}
          `
  };
`;

const outlineColorStyles = css<ButtonProps>`
  ${({ color, outline }) =>
          color === 'dark' &&
          outline &&
          css`
            background-color: transparent;
            
            font-weight: 700;
            color: ${oc.black};
            
            border: 2px solid ${oc.black};
          `
  };

  ${({ color, outline }) =>
          color === 'primary' &&
          outline &&
          css`
            background-color: transparent;

            font-weight: 700;
            color: ${oc.indigo[5]};
            
            border: 2px solid ${oc.indigo[5]};
          `
  };

  ${({ color, outline }) =>
          color === 'danger' &&
          outline &&
          css`
            background-color: transparent;

            font-weight: 700;
            color: ${oc.red[7]}
            
            border: 2px solid ${oc.red[7]}
          `
  };
`;

const sizeStyles = css<ButtonProps>`
  ${props =>
          props.fullWidth &&
          css`
            width: 100%;
            padding: 12px;
          `
  };
`;

const Button = styled.button<ButtonProps>`
  color: ${oc.white};

  ${colorStyles};
  ${outlineColorStyles}
  ${sizeStyles};
`;

export default Button;
